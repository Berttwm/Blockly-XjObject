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
  Blockly.Blocks['xjobject_op2'] = {
    init: function() {
      this.appendValueInput("XjObject Operator 2")
          .setCheck("XjObject")
          .appendField("XjObject Operator 2");
      this.setInputsInline(false);
      this.setOutput(true, "XjObject");
      this.setColour(0);
   this.setTooltip("XjObject Operator 2");
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
    var functionName = Blockly.JavaScript.provideFunction_(
        'xj_op1',
        [ 'function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + '(xjobject) {',
          ' if(xjobject[1] < 100) {',
          '     alert("score too low, adding 10 to score..."); ',
          '     xjobject[1] += 10;',
          ' } else {',
          '     alert("score is good")',
          ' }',
          ' return xjobject;',
          '}'
        ]);
    var code = functionName+'(' + value_xjobject_operator_1 + ')';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  Blockly.JavaScript['xjobject_op2'] = function(block) {
    var value_xjobject_operator_2 = Blockly.JavaScript.valueToCode(block, 'XjObject Operator 2', Blockly.JavaScript.ORDER_ATOMIC);
    var functionName = Blockly.JavaScript.provideFunction_(
        'xj_op2',
        [ 'function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + '(xjobject) {',
          ' if(xjobject[0] == "a") {',
          '     xjobject[1] *= 2;',
          ' }',
          ' return xjobject;',
          '}'
        ]);
    var code = functionName+'(' + value_xjobject_operator_2 + ')';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };
  /*-- Python Implmentations --*/
  Blockly.Python['xjobjectcreator'] = function(block) {
    var value_attrname = Blockly.Python.valueToCode(block, 'attrName', Blockly.Python.ORDER_ATOMIC);
    var value_attrscore = Blockly.Python.valueToCode(block, 'attrScore', Blockly.Python.ORDER_ATOMIC);
    var value_attrclslist = Blockly.Python.valueToCode(block, 'attrClsList', Blockly.Python.ORDER_ATOMIC);
    var code = '[' + value_attrname + ',' + value_attrscore + ',' + value_attrclslist + ']';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['xjobject_op1'] = function(block) {
    var value_xjobject_operator_1 = Blockly.Python.valueToCode(block, 'XjObject Operator 1', Blockly.Python.ORDER_ATOMIC);
    var functionName = Blockly.Python.provideFunction_(
        'xj_op1',
        [ 'def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(xjobject) :',
          ' if(xjobject[1] < 100):',
          '     print("score too low, adding 10 to score...") ',
          '     xjobject[1] += 10',
          ' else:',
          '     print("score is good")',
          ' return xjobject;',
        ]);
    var code = functionName+'(' + value_xjobject_operator_1 + ')';
    // var code = value_xjobject_operator_1;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  };
  
  Blockly.Python['xjobject_op2'] = function(block) {
    var value_xjobject_operator_2 = Blockly.Python.valueToCode(block, 'XjObject Operator 2', Blockly.Python.ORDER_ATOMIC);
    var functionName = Blockly.Python.provideFunction_(
        'xj_op2',
        [ 'def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(xjobject) :',
          ' if(xjobject[0] == "a"):',
          '     xjobject[1] *= 2',
          ' return xjobject;',
        ]);
    var code = functionName+'(' + value_xjobject_operator_2 + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  };