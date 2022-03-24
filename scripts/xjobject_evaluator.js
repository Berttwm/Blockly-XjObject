/* XjObject Level Evaluator 
* To determine the overall level of an image object given a configuration list
*/

/**
 * Image Level Evaluator
 * Accepts as input the configuration settings (config list) and an image (list of xjobject_type)
 * The evaluator first determines the level of each object within the image. This is done by
 * taking the lowest level among all configurations 
 * Evaluator then determines the maximum of all levels stored. 
 * The maximum of all levels stored well be returned as output
 * 
 * 
 * @param Config_list -- accepts xjobject_config list to parameterize the evaluator
 * @param Image -- accepts an image which is a list of xjobject_typeXX (i.e xjobject_type1)
 * @output number -- maximum level between all xjobjects within image 
 */
 Blockly.Blocks['xjobject_evaluator'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Image Level Evaluator");
    this.appendValueInput("config")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Config list");
    this.appendValueInput("image")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Image");
    this.setOutput(true, "Number");
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['xjobject_evaluator'] = function(block) {
  var value_config = Blockly.Python.valueToCode(block, 'config', Blockly.Python.ORDER_ATOMIC);
  var value_image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  // Custom function for config_list and imager check
  var configCheckerFunction = Blockly.Python.provideFunction_(
    'xjobject_configlist_and_image_checker',
    [ 'def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(config_list, image) :',
    '\t'+'# Step1: Config_list checker',
    '\t'+'visited_config_obj_type_num = []',
    '\t'+'if not config_list:',
    '\t\t'+'raise Exception("config list of configs cannot be empty")',
    '\t'+'for config in config_list:',
    '\t\t'+'config_obj_type_num = config[0]',
    '\t\t'+'if(config_obj_type_num in visited_config_obj_type_num):',
    '\t\t\t'+'raise Exception("config list has two same obj_type configurations of obj_type({})".format(config_obj_type_num))',
    '\t\t'+'else:',
    '\t\t\t'+'visited_config_obj_type_num.append(config_obj_type_num)',
    '\t\t'+'checker_list = []',
    '\t\t'+'for key,value in config[1].items():',
    '\t\t\t'+'checker_list.append(key)',
    '\t\t'+'for i in range(2,len(config)):',
    '\t\t\t'+'for key,value in config[i].items():',
    '\t\t\t\t'+'if key not in checker_list:',
    '\t\t\t\t\t'+'raise Exception("config list object_type number ({}) has non matching key-value pair: ({},{})".format(config_obj_type_num, key, value))',
    '\t'+'# Step2: Image checker',
    '\t'+'if not image:',
    '\t\t'+'raise Exception("image list of objects cannot be empty")',
    '\t'+'for obj in image:',
    '\t\t'+'if not isinstance(obj, dict):',
    '\t\t\t'+'raise Exception("image list of objects is wrongly formatted")',
    ]);
  // Custom function for actual evaluation
  var xjobjectEvaluatorFunction = Blockly.Python.provideFunction_(
    'xjobject_evaluator',
    [ 'def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(config_list, image) :',
      '\t'+'xjobject_configlist_and_image_checker(config_list, image)',
      '\t'+'levels = []',
      '\t'+'for obj_idx, obj in enumerate(image):',
      '\t\t'+'obj_type_num = obj["object_type"]',
      '\t\t'+'isAssignedLevel = False',
      '\t\t'+'for config in config_list:',
      '\t\t\t'+'if isAssignedLevel:',
      '\t\t\t\t'+'break;',
      '\t\t\t'+'config_obj_type_num = config[0] ',
      '\t\t\t'+'if(obj_type_num == config_obj_type_num): # match b/w config and obj_type_num',
      '\t\t\t\t'+'errorCheckKey = ""',
      '\t\t\t\t'+'for i,curr_level_dict in reversed(list(enumerate(config))):',
      '\t\t\t\t\t'+'if isAssignedLevel:',
      '\t\t\t\t\t\t'+'break;',
      '\t\t\t\t\t'+'if(i == 0):# idx 0 is the object_type number',
      '\t\t\t\t\t\t'+'raise Exception("image object index({}) has an attribute ({}) that is out of range".format(obj_idx, errorCheckKey))',
      '\t\t\t\t\t\t'+'break;',
      '\t\t\t\t\t'+'matchCount = 0;',
      '\t\t\t\t\t'+'for key,value in curr_level_dict.items():',
      '\t\t\t\t\t\t'+'try:',
      '\t\t\t\t\t\t\t'+'obj_key_value = obj[key]',
      '\t\t\t\t\t\t'+'except Exception:',
      '\t\t\t\t\t\t\t'+'raise Exception("configuration list and image object does not have matching keys for attribute name: ({})".format(key))',
      '\t\t\t\t\t\t'+'errorCheckKey = key',
      '\t\t\t\t\t\t'+'if(obj_key_value in range(value[0], value[1] + 1)):',
      '\t\t\t\t\t\t\t'+'matchCount+=1',
      '\t\t\t\t\t'+'if(matchCount != 0 and matchCount != len(curr_level_dict)):',
      '\t\t\t\t\t\t'+'raise Exception("image object index ({}) has attribute values that are in different levels".format(obj_idx))',
      '\t\t\t\t\t'+'elif(matchCount == len(curr_level_dict)):',
      '\t\t\t\t\t\t'+'isAssignedLevel = True',
      '\t\t\t\t\t\t'+'levels.append(i)',
      '\t\t\t\t\t'+'else: # matchCount == 0 simply means no match',
      '\t\t\t\t\t\t'+'continue;',
      '\t'+'return max(levels)',
    ]);
  // TODO: Assemble Python into code variable.
  var code = xjobjectEvaluatorFunction+'(' + value_config + ',' + value_image + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};