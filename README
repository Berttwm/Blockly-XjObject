# Blockly Flow Evaluator (Python Generator)

## Introduction 

This project extends Blockly (Link [here](https://github.com/google/blockly)) and creates a flow-based evaluator given both **1) Configuration list** and **2) List of configurable object types**. The result will be a python generated code which can then be copied and run locally with your own python interpreter. 

The evaluator works on a few simple rules. Assuming the inputs (image and configuration list) are correct, the evaluator first iterates through all the objects inside the image. For every object, the evaluator scans the configuration list for the equivalent "Object type" number and does an exclusive check for all parameters included from level 5 down. The evaluation for a single object's level ends only when every level present in the configuration list has been checked across the object for matching attributes. After every object within the image has been assigned a level, the evaluator than chooses the highest (*can be changed*) level among all the objects and returns it as a result.

An example will be given in the following section.
> The evaluator also checks for exception/boundary cases

## Example Flow
![enter image description here](https://user-images.githubusercontent.com/44689249/157819852-121a4ef0-856c-4628-856b-24c49f8e7ca4.jpg)

This is an example of a completed flow. You can replicate my results by following this image, and head to the **Python** tab after you have done so.

In this example, the image's **object type 1** has **height 15** and **width 15**. This corresponds to Level 1 of the configuration (within the config list) meant for **object type 1** since all attributes within the object is within the **Lower bound = 0** and **Upper bound = 20** for the corresponding attributes listed in Level 1 of the configuration. The resulting level for object type 1 is level 1.

 Following the same logic, the image's **object type 2** has **age 25** which corresponds to level 3 of the configuration meant for **object type 2** as it is within Level 3's **Lower bound = 21** and **Upper bound = 30**. The resulting level for object type 2 is level 3.

The evaluator then picks the highest level among all the ranked objects found in the image. In this case Level 1 and Level 3 are the object levels of the image and the evaluator picks Level 3 as the resultant highest answer. 
 

## Steps to begin running

 1. Setup Blockly using the included "**blockly to python guide.docx**" included in the front page of the repo.
 2. Run the **index.html** file included in the front page of the repo, and use the included Xjobject toolbox  
![image](https://user-images.githubusercontent.com/44689249/157820953-6eb34e6e-c4a1-4aad-a13c-518d0a51936d.png)
 3. Create a Config list and an XjObject list. 

> It is important that the configuration and XjObjects created must be stored in a list before being passed as arguments to XjObject Evaluator

 4. Run the XjObject Evaluator on the Config list and Xjobject list. 
 5. Print the result of the evaluation
 6. Head to the Python tab
![image](https://user-images.githubusercontent.com/44689249/157821397-bcdc72bb-0181-4850-be6d-3f0603381d37.png)
 7. Copy and paste code from the python tab to your own python file to be run and run with your own python interpreter. 


## Current issues

 1. In this iteration, we are unable to directly download the python file
> Inside ./code.js line 408, an auto downloader which saves a python file name 'python_runnable.py' in your download folder is commented out. This feature works by downloading an instance of your python code into a python file everytime the python tab is clicked.
 2. All other tabs (javascript, xml, json) are useless in this iteration. Can be removed later on.
