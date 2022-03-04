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
      this.appendValueInput("XjObject Operator 1")
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
    // alert('@1');
    var code = '[' + value_attrname + ',' + value_attrscore + ',' + value_attrclslist + ']';
    // Assigning temporary variables to pass on
    
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  Blockly.JavaScript['xjobject_op1'] = function(block) {
    var value_xjobject_operator_1 = Blockly.JavaScript.valueToCode(block, 'XjObject Operator 1', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.

    var functionName = Blockly.JavaScript.provideFunction_(
        'xj_op1',
        [ 'function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + '(xjobject) {',
          ' if(xjobject[1] < 100) {',
          '     alert("score too low"); ',
          '     xjobject[1] += 10;',
          ' } else {',
          '     alert("score is good")',
          ' }',
          ' return xjobject;',
          '}'
        ]);
    // alert(attrScore)
    var code = functionName+'(' + value_xjobject_operator_1 + ')';
    // var input = Blockly.JavaScript.getInput("XjObject Operator 1");
    // alert(code);
    // alert(value_xjobject_operator_1[1]);
    // alert(value_xjobject_operator_1[2]);
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
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
  
  Blockly.Python['xjobject_op1'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    // alert(value_name[0]);
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
