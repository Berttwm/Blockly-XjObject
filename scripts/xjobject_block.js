Blockly.Blocks['xjobjectcreator'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("XjObjectCreator");
      this.appendValueInput("attrName")
          .setCheck("String")
          .appendField("attrName");
      this.appendValueInput("attrScore")
          .setCheck("Number")
          .appendField("attrScore");
      this.appendValueInput("attrClsList")
          .setCheck("Array")
          .appendField("attrClsList");
      this.setOutput(true, "XjObject");
      this.setColour(0);
   this.setTooltip("XjObject creator based on fields. Outputs XjObject.");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['xjobject_op1'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck("XjObject")
          .appendField("XjObject Operator 1");
      this.setInputsInline(false);
      this.setOutput(true, "XjObject");
      this.setColour(0);
   this.setTooltip("XjObject Operator 1");
   this.setHelpUrl("");
    }
  };
/*-- JS Implmentations --*/
  Blockly.JavaScript['xjobjectcreator'] = function(block) {
    var value_attrname = Blockly.JavaScript.valueToCode(block, 'attrName', Blockly.JavaScript.ORDER_ATOMIC);
    var value_attrscore = Blockly.JavaScript.valueToCode(block, 'attrScore', Blockly.JavaScript.ORDER_ATOMIC);
    var value_attrclslist = Blockly.JavaScript.valueToCode(block, 'attrClsList', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var xjObjectArr = [value_attrname, value_attrscore, value_attrclslist]; 
    alert(xjObjectArr);
    var code = '[' + value_attrname + ',' + value_attrscore + ',' + value_attrclslist + ']';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  Blockly.JavaScript['xjobject_op1'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  /*-- Python Implmentations --*/
  Blockly.Python['xjobjectcreator'] = function(block) {
    var value_attrname = Blockly.Python.valueToCode(block, 'attrName', Blockly.JavaScript.ORDER_ATOMIC);
    var value_attrscore = Blockly.Python.valueToCode(block, 'attrScore', Blockly.JavaScript.ORDER_ATOMIC);
    var value_attrclslist = Blockly.Python.valueToCode(block, 'attrClsList', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '[' + value_attrname + ',' + value_attrscore + ',' + value_attrclslist + ']';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.JavaScript['xjobject_op1'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };