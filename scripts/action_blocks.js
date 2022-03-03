/**

 */

Blockly.defineBlocksWithJsonArray([
  // Block for custom action.
  {
    "type": "action",
    "message0": "%1 %2",
    "args0": [
      {
        "type": "field_input",
        "name": "input_str1",
        "text": "b"
      },
      {
        "type": "input_value",
        "name": "input_str1",
        "check": "String"
      }
    ],
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }
]);
// JS implementation
Blockly.JavaScript['action'] = function(block) {
  var text_input_str1 = block.getFieldValue('input_str1');
  var value_input_str1 = Blockly.JavaScript.valueToCode(block, 'input_str1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  if(value_input_str1 == '') {
    // if no incoming line
    code = "1+2+3";
    // code = "'" + text_input_str1 + "'";
  } else {
    // if incoming line
    code = "" + value_input_str1;
  }

  return [code, Blockly.JavaScript.ORDER_NONE];
};

// Python implementation
Blockly.Python['action'] = function(block) {
  var text_input_str1 = block.getFieldValue('input_str1');
  var value_input_str1 = Blockly.Python.valueToCode(block, 'input_str1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  if(value_input_str1 == '') {
    // if no incoming line
    code = "1+2+8 asd";
    // code = "'" + text_input_str1 + "'";
  } else {
    // if incoming line
    code = "" + value_input_str1;
  }
  // var code = "" + text_input_str1 + "+" + value_input_str1;
  
  // TODO: Change ORDER_NONE to the correct strength.
  var startTime = performance.now();
  for(let i = 0; i < 10000000; i++)
  {
    let x = 120/2;
  }
  var endTime = performance.now();
  console.log(`Call to loop took ${endTime - startTime} milliseconds`);
  // alert()
  return [code, Blockly.Python.ORDER_NONE];
};
