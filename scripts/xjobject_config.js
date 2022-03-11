/* XjObject Configurator 
* Setup configurations for evaluator 
*/

/**
 * Init Config
 * Initialize the configuration for an object type. 
 * ================================================================================================
 * Data structure used: 
 * Array of levels
 *  idx 0: object_type number (0-5)
 *  idx 1-5: level 1-5 dictionary of parameters
 *    Each dictionary holds a key: "attribute" and a value: "Pair of bounds"
 *      Pair of bounds hold <lower_bound, upper_bound> 
 * ================================================================================================
 * 
 * @param Object_type -- Choose the specified object type you want to set this configuration for
 * @param Store_in_variable -- Select the initialized variable where the configuration will be stored in
 * @param Level_1_adder -- statement meant to initialize level 1 parameters 
 * @param Level_2_adder -- statement meant to initialize level 2 parameters
 * @param Level_3_adder -- statement meant to initialize level 3 parameters
 * @param Level_4_adder -- statement meant to initialize level 4 parameters
 * @param Level_5_adder -- statement meant to initialize level 5 parameters
 * @output -- xjobject_config
 */
 Blockly.Blocks['xjobject_config_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Init Config:")
        .appendField("Object type")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"]]), "object_type");
    this.appendValueInput("Level 1 adder")
        .setCheck("level_adder")
        .appendField("Level 1 adder");
    this.appendValueInput("Level 2 adder")
        .setCheck("level_adder")
        .appendField("Level 2 adder");
    this.appendValueInput("Level 3 adder")
        .setCheck("level_adder")
        .appendField("Level 3 adder");
    this.appendValueInput("Level 4 adder")
        .setCheck("level_adder")
        .appendField("Level 4 adder");
    this.appendValueInput("Level 5 adder")
        .setCheck("level_adder")
        .appendField("Level 5 adder");
    this.setInputsInline(false);
    this.setOutput(true, "xjobject_config");
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['xjobject_config_init'] = function(block) {
  var dropdown_object_type = block.getFieldValue('object_type');
  var value_level_1_adder = Blockly.Python.valueToCode(block, 'Level 1 adder', Blockly.Python.ORDER_ATOMIC);
  var value_level_2_adder = Blockly.Python.valueToCode(block, 'Level 2 adder', Blockly.Python.ORDER_ATOMIC);
  var value_level_3_adder = Blockly.Python.valueToCode(block, 'Level 3 adder', Blockly.Python.ORDER_ATOMIC);
  var value_level_4_adder = Blockly.Python.valueToCode(block, 'Level 4 adder', Blockly.Python.ORDER_ATOMIC);
  var value_level_5_adder = Blockly.Python.valueToCode(block, 'Level 5 adder', Blockly.Python.ORDER_ATOMIC);

  // TODO: Assemble Python into code variable.
  var code = '[\n';
  code += dropdown_object_type + ',';
  if(!value_level_1_adder | !value_level_2_adder | !value_level_3_adder | !value_level_4_adder | !value_level_5_adder)
    alert("Error: Init Config level adders cannot be empty");
  if(value_level_1_adder) code += '{\n' + value_level_1_adder + '},';
  if(value_level_2_adder) code += '{\n' + value_level_2_adder + '},';
  if(value_level_3_adder) code += '{\n' + value_level_3_adder + '},';
  if(value_level_4_adder) code += '{\n' + value_level_4_adder + '},';
  if(value_level_5_adder) code += '{\n' + value_level_5_adder + '},';
  code += '\n]';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

/** 
 * XjObject Config Adder
 * add a configuration parameter to the configuration level it is chained with
 * 
 * @param Attr_name -- attribute name for the parameter to be set 
 * @param Lower_bound -- lower limit of this attribute 
 * @param Upper_bound -- upper limit of this attribute 
 * @input level_adder -- chain in an additional XjObject_config_adder to add extra attributes to level
 * @output level_adder -- to be chained with other config adders or config level blocks
 */
 Blockly.Blocks['xjobject_config_adder'] = {
  init: function() {
    this.appendValueInput("config_adder")
        .setCheck("level_adder")
        .appendField("Attr name")
        .appendField(new Blockly.FieldTextInput("attr"), "attr_name")
        .appendField("Lower Bound")
        .appendField(new Blockly.FieldNumber(0, 0), "lower_bound")
        .appendField("Upper Bound")
        .appendField(new Blockly.FieldNumber(0, 0), "upper_bound");
    this.setOutput(true, "level_adder");
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['xjobject_config_adder'] = function(block) {
  var text_attr_name = block.getFieldValue('attr_name');
  var number_lower_bound = block.getFieldValue('lower_bound');
  var number_upper_bound = block.getFieldValue('upper_bound');
  var value_config_adder = Blockly.Python.valueToCode(block, 'config_adder', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = Blockly.Python.INDENT + '"' + text_attr_name+'":(' + number_lower_bound + ',' + number_upper_bound + '),\n' + value_config_adder;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
