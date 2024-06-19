import xml.etree.ElementTree as E
import json

#parsing the xml
tree = E.parse('WebServiceInterface.xml')
root = tree.getroot()

#thhis final mai library
main_list={}
main_list['abstract_method']=[]

#adding abstract_method
for abs_method in root.iter('abstract_method'): 
    aM_list={}
    
    abs_method_att= abs_method.get('id')   
    aM_list["method_name"]=abs_method_att
    for access in root.iter('access'):
        if "visibility" not in aM_list:
            aM_list["visibiity"]=access.text
            param={}
            param["parameter"]=[]
    aM_list["arguments"]=param
    excep={}
    excep["exception"]=[]
    aM_list["exceptions"]=excep
              
    #adding parameterList
    for paramList in abs_method:
        for parameter in paramList.findall('parameter'):
            parameter_list = {}
            param_att= parameter.get("type")
            parameter_list["datatype"]=param_att
            parameter_list["label"]=parameter.text
            param["parameter"].append(parameter_list)

    #adding exceptions
    for exceptions in abs_method:
        for exception in exceptions.findall('throws'):
            throws = exception.text
            excep["exception"].append(throws)
    if len(aM_list["exceptions"]['exception']) == 0:
        del aM_list["exceptions"]

    #adding the return
    for return_boolean in abs_method.findall("return"):
        aM_list[return_boolean.tag]=return_boolean.text

    #combining both abstract method
    main_list["abstract_method"].append(aM_list)

#uncomment the command below to see the final dictionary
#print("this is main list:", main_list)

#converting the dictionary into json. There will be a file called result.json that is created.
with open("result.json", "w") as outfile: 
    json.dump(main_list, outfile)