image1 = None
config_list = None

def xjobject_configlist_and_image_checker(config_list, image) :
	# Step1: Config_list checker
	visited_config_obj_type_num = []
	if not config_list:
		raise Exception("config list of configs cannot be empty")
	for config in config_list:
		config_obj_type_num = config[0]
		if(config_obj_type_num in visited_config_obj_type_num):
			raise Exception("config list has two same obj_type configurations of obj_type({})".format(config_obj_type_num))
		else:
			visited_config_obj_type_num.append(config_obj_type_num)
		checker_list = []
		for key,value in config[1].items():
			checker_list.append(key)
		for i in range(2,len(config)):
			for key,value in config[i].items():
				if key not in checker_list:
					raise Exception("config list object_type number ({}) has non matching key-value pair: ({},{})".format(config_obj_type_num, key, value))
	# Step2: Image checker
	if not image:
		raise Exception("image list of objects cannot be empty")
	for obj in image:
		if not isinstance(obj, dict):
			raise Exception("image list of objects is wrongly formatted")

def xjobject_evaluator(config_list, image) :
	xjobject_configlist_and_image_checker(config_list, image)
	levels = []
	for obj_idx, obj in enumerate(image):
		obj_type_num = obj["object_type"]
		isAssignedLevel = False
		for config in config_list:
			if isAssignedLevel:
				break;
			config_obj_type_num = config[0]
			if(obj_type_num == config_obj_type_num): # match b/w config and obj_type_num
				errorCheckKey = ""
				for i,curr_level_dict in reversed(list(enumerate(config))):
					if isAssignedLevel:
						break;
					if(i == 0):# idx 0 is the object_type number
						raise Exception("image object index({}) has an attribute ({}) that is out of range".format(obj_idx, errorCheckKey))
						break;
					matchCount = 0;
					for key,value in curr_level_dict.items():
						obj_key_value = obj[key]
						errorCheckKey = key
						if(obj_key_value in range(value[0], value[1] + 1)):
							matchCount+=1
					if(matchCount != 0 and matchCount != len(curr_level_dict)):
						raise Exception("image object index ({}) has attribute values that are in different levels")
					elif(matchCount == len(curr_level_dict)):
						isAssignedLevel = True
						levels.append(i)
					else: # matchCount == 0 simply means no match
						continue;
	return max(levels)


image1 = [
{"object_type":1,"name":"car1","height":85,"width":15},
{"object_type":2,"name":"person1","weight":50,"age":25}]
config_list = [[
1,{
  "height":(0,20),
  "width":(0,20),
},{
  "height":(21,40),
  "width":(21,40),
},{
  "height":(41,60),
  "width":(41,60),
},{
  "height":(61,80),
  "width":(61,80),
},{
  "height":(81,1000),
  "width":(81,1000),
},
], [
2,{
  "age":(0,10),
},{
  "age":(11,20),
},{
  "age":(21,30),
},{
  "age":(31,40),
},{
  "age":(41,1000),
},
]]
print(xjobject_evaluator(config_list,image1))