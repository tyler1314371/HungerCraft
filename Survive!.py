
import os
import string
import random
import datetime
import time


clear = lambda: os.system('cls')
start_time = datetime.datetime.now()

hunger=100


commands = {
                "i" : "see inventory",
                "c" : "see crafting table",
                "craft [item]" : "craft something from inventory items",
                "d" : "discover resources",
                "h [resources]" : "harvest currently dicovered resources",
                "clear" : "clear screen"
           }

#an inventory of items
items = {
            "flint" : 0,

            "grass" : 0,
            "hay" : 0,

            "treelog" : 0,

            "sapling" : 0,
            "twig" : 0,

            "rock" : 0,

            "axe" : 0,
            "fence": 0,

            "firepit" : 0,
            "tent" : 0,
        }

#rules to make new objects
craft = {
            "hay" : { "grass" : 2 },
            "twig" : { "sapling" : 2 },
            "axe" : { "twig" : 2, "flint" : 1 },
            "fence" : { "treelog" : 6 },
            "tent" : { "twig" : 2, "hay" : 2 },
            "firepit" : { "rock" : 4, "treelog" : 3, "twig" : 1, "flint" : 1 }
        }

items_desc = {
            "flint" : "rare resource, can be harvested from discovery",

            "grass" : "resource, can be harvested from discovery",
            "hay" : "resource, can be crafted",

            "treelog" : "resource, can be harvested from discovery",

            "sapling" : "resource, can be harvested from discovery",
            "twig" : "resource, can be crafted",

            "rock" : "resource, can be harvested from discovery",

            "axe" : "tool that can be used to chop trees",
            "fence" : "provides protection from Steve",

            "firepit" : "objective",
            "tent" : "objective",

            "rabbit" : "tiny critters",
            "squirrel" : "tiny critters"
        }

full_resources = ['treelog', 'grass', 'squirrel', 'rabbit' ,'rock' , 'sapling']
harvestable_resources = ['treelog', 'grass','rock' , 'sapling', 'flint']
current_resources = []


print("TRY TO SURVIVE BY CRAFTING A TENT AND A FIREPIT!\n")
print("type '?a' for list of actions")
print("type '?[item]' for how to obtain them")

while True:

    command = raw_input(">").split()


    if len(command) == 0:
        continue

    if len(command) > 0:
        verb = command[0].lower()
    if len(command) > 1:
        item = command[1].lower()

    if verb[0] == "?" and len(command[0])>1:
        if verb[1] =='a':
            for key in commands:
                print(key + " : " + commands[key])
            print("\n")
        else:
            if verb[1:] in items_desc:
                print (items_desc[verb[1:]])

    elif verb == "i":
        for key in items:
            if items[key] > 0:
                print(key + " : " + str(items[key]))
        print("\n")

    elif verb == "clear":
        clear()

    elif verb == "d":
        current_resources = []


        for count in range(0,3):
            temp = random.choice(full_resources)
            current_resources.append(temp)

        if random.randint(0,100) < 6:
            current_resources.remove(temp)
            current_resources.append('flint')
        if random.randint(0,100) < 4:
            if items['fence'] >0:
                print('A wild Steve appeared, tried to take all your raw resources but got blocked by fence\n')
                continue
            print('A wild Steve appeared and took all your raw resources because you don\'t have a fence!!!!\n')
            for key in items:
                if key in harvestable_resources:
                    items[key] = 0
            continue

        print(current_resources)
        print("\n")

    elif verb == "c":
        for key in craft:
            print(key + " can be made with:")

            for i in craft[key]:
                print(str(craft[key][i]) + " " + i)

            print("-----------------------\n")
            
    elif verb == "craft" and len(command) > 1:

       
        if item in craft:

            canBeMade = True

            for i in craft[item]:
                if craft[item][i] > items[i]:
                    print("item cannot be crafted, check your resources again\n")
                    for i in craft[item]:
                        print("  you need : " + str(craft[item][i]) + " " + i + " and you have " + str(items[i]))
                    canBeMade = False
                    break
            
            if canBeMade == True:
                for i in craft[item]:
                    items[i] -= craft[item][i]

                items[item] += 1

                print(item + " crafted\n")


            if items["tent"] >= 1 and items["firepit"] >= 1:
                print("\n**YOU HAVE MANAGED TO SURVIVE!WELL DONE!***")
                print ("TIME: "+ str(datetime.datetime.now()-start_time))
                break


        else:
            print("you can't")

    elif verb == "h" and len(command) > 1:
        if item in current_resources:
            if item not in harvestable_resources:
                print ("can't harvest " + item)
            else:

                if item == 'treelog':
                    if items['axe'] == 0:
                        print("you need an axe for that!")
                    else:
                        random_num = random.randint(0,100)
                        if random_num > 93:
                            print('treelog'+" +3 \n")
                            items['treelog'] += 3
                        elif random_num > 80:
                            print('treelog'+" +2 \n")
                            items['treelog'] += 2
                        else:
                            print('treelog'+" +1 \n")
                            items['treelog'] += 1
                else:
                    random_num = random.randint(0,100)
                    if random_num > 93:
                        print(item+" +3 \n")
                        items[item] += 3
                    elif random_num > 80:
                        print(item+" +2 \n")
                        items[item] += 2
                    else:
                        print(item+" +1 \n")
                        items[item] += 1
                current_resources.remove(item)

        else:
            print(item + " not found, try discovering it")

        

    else:
        print("invalid actions, press ?a to see list of actions")