# Use this evaluator when all below conditions are required:
# 	1) A configuration inside the config_list contains multiple attributes per level
#	2) You want the lowest level when considering all attributes *MOST IMPT FACTOR 
#	3) You do not want the original "level exclusivity check" 

def xjobject_evaluator(config_list, image) :
	xjobject_configlist_and_image_checker(config_list, image)
	levels = []
	for obj_idx, obj in enumerate(image):
		obj_type_num = obj["object_type"] 
		min_level = 6
		for config in config_list:
			config_obj_type_num = config[0] 
			if(obj_type_num == config_obj_type_num): # match b/w config and obj_type_num
				isAssignedLevel = False
				errorCheckKey = ""
				for i,curr_level_dict in reversed(list(enumerate(config))): #iterate list backwards
					if(isAssignedLevel):
						break;
					if(i == 0):# idx 0 is the object_type number
						raise Exception("image object index({}) has an attribute ({}) that is out of range".format(obj_idx, errorCheckKey))
						break;
					for key,value in curr_level_dict.items():
						obj_key_value = obj[key]
						errorCheckKey = key
						if(obj_key_value in range(value[0], value[1] + 1)):
							min_level = min(i, min_level) # add to levels if obj_key_value is between the lower (inclusive) and upper bound (inclusive)
							isAssignedLevel = key;
							break # not necessary
		if(min_level == 6):
			raise Exception("image object index({}) cannot be assigned a level".format(obj_idx))
		else:
			levels.append(min_level)
	return max(levels)