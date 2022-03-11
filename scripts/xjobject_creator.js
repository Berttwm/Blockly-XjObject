/* XjObject Creator 
* Creator to create different types of Xjobject. Be sure to differentiate between
* String and Numbered inputs
*/

/**
 * Creator (xjobject_type1)
 * Creator for xjobject (type1). To be stored in a list.
 * 
 * @param name -- accepts string
 * @param height -- accepts number
 * @param width -- accepts number
 * @output xjobject -- xjobjects to be stored in a list
 */
 Blockly.Blocks['xjobject_creator_type1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("obj type 1 creator");
    this.appendDummyInput()
        .appendField("name")
        .appendField(new Blockly.FieldTextInput("name"), "name")
        .appendField("height")
        .appendField(new Blockly.FieldNumber(0, 0), "height")
        .appendField("width")
        .appendField(new Blockly.FieldNumber(0, 0), "width");
    this.setOutput(true, "xjobject");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['xjobject_creator_type1'] = function(block) {
  var text_name = block.getFieldValue('name');
  var number_height = block.getFieldValue('height');
  var number_width = block.getFieldValue('width');
  // TODO: Assemble Python into code variable.
  var code = '\n{';
  code += '"object_type":' + 1 + ',';
  code += '"name":' + '"' + text_name + '"' + ',';
  code += '"height":' + number_height + ',';
  code += '"width":' + number_width;
  code += '}';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
/**
 * Creator (xjobject_type2)
 * Creator for xjobject (type2). To be stored in a list.
 * 
 * @param name -- accepts string
 * @param weight -- accepts number
 * @param age -- accepts number
 * @output xjobject -- xjobjects to be stored in a list
 */
Blockly.Blocks['xjobject_creator_type2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("obj type 2 creator");
    this.appendDummyInput()
        .appendField("name")
        .appendField(new Blockly.FieldTextInput("name"), "name")
        .appendField("weight")
        .appendField(new Blockly.FieldNumber(0, 0), "weight")
        .appendField("age")
        .appendField(new Blockly.FieldNumber(0, 0), "age");
    this.setOutput(true, "xjobject");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['xjobject_creator_type2'] = function(block) {
  var text_name = block.getFieldValue('name');
  var number_weight = block.getFieldValue('weight');
  var number_age = block.getFieldValue('age');
  // TODO: Assemble Python into code variable.
  var code = '\n{';
  code += '"object_type":' + 2 + ',';
  code += '"name":' + '"' + text_name + '"' + ',';
  code += '"weight":' + number_weight + ',';
  code += '"age":' + number_age;
  code += '}';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};