
import os
import string
import random
import datetime
import time
import time
import sys





clear = lambda: os.system('cls')
start_time = datetime.datetime.now()

stamina=100

def print_hunger_bar():
    global stamina
    bar = 'Stamina: ' + str(stamina) + ' ['
    for i in range(stamina/5):
        bar = bar + '#'

    empty = 100 - stamina
    for i in range(empty/5):
        bar = bar + '-'

    bar = bar +']'

    print bar+'\n'



def check_game_over():
    global stamina
    if stamina <= 0:
        print("GAME OVER, you died from hunger!!\n")
        exit()

def add_stamina(amount):
    global stamina
    if stamina + amount > 100:
        stamina = 100
    else:
        stamina = stamina +amount

def reduce_stamina(amount):
    global stamina
    stamina = stamina - amount
    check_game_over()



commands = {
                "i" : "see inventory and stamina",
                "c" : "see crafting table",
                "craft [item]" : "craft something from inventory items",
                "u [item]" : "use item",
                "d" : "discover resources",
                "h [resources]" : "harvest currently dicovered resources",
                "clear" : "clear screen"
           }

#an inventory of items
items = {
        }

#rules to make new objects
craft = {
            "hay" : { "grass" : 2 },
            "twig" : { "sapling" : 2 },
            "string": {"sapling" : 1 ,"rock" : 1},
            "axe" : { "twig" : 2, "flint" : 1 },
            "fence" : { "treelog" : 6 },
            "tent" : { "twig" : 4, "hay" : 3 , "rock": 3, "string": 4, "treelog" :4},
            "trap" : { "rock" : 1, "string" : 1, "twig" : 1},
            "firepit" : { "rock" : 2, "treelog" : 2, "twig" : 1, "flint" : 1 },
            "meat" : { "rabbit" : 1 }
        }

items_desc = {
            "flint" : "rare resource, can be harvested from discovery",

            "grass" : "resource, can be harvested from discovery",
            "hay" : "resource, can be crafted",

            "treelog" : "resource, can be harvested from discovery",

            "sapling" : "resource, can be harvested from discovery",
            "twig" : "resource, can be crafted",
            "string": "resource, can be crafted",

            "rock" : "resource, can be harvested from discovery",

            "axe" : "tool that can be used to chop trees",
            "fence" : "provides protection from Steve",

            "firepit" : "objective",
            "tent" : "objective",

            "rabbit" : "tiny critters, can be captured if you have a trap",

            "meat" : "can recover some stamina",
            "apple" : "can recover some stamina"

        }

full_resources = ['treelog', 'grass', 'rabbit' ,'rock' , 'sapling']
#harvestable_resources = ['treelog', 'grass','rock' , 'sapling', 'flint']
current_resources = []
usable_resources = ['meat', 'apple']


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
                print key + " : " + commands[key]
            print "\n"
        else:
            if verb[1:] in items_desc:
                print (items_desc[verb[1:]])

    elif verb == "i":
        print("Inventory: ")
        if items:
            for key in items:
                if items[key] > 0:
                    print(key + " : " + str(items[key]))
        print("-----------------------")
        print_hunger_bar();

    elif verb == "clear":
        clear()

    elif verb == "d":
        current_resources = []

        reduce_stamina(3)

        for count in range(0,3):
            temp = random.choice(full_resources)
            current_resources.append(temp)

        for i in range(3):
            if random.randint(0,100) < 10:
                current_resources[i] = ''

        if random.randint(0,100) < 7:
            current_resources.append('flint')
        if random.randint(0,100) < 4:
            if 'fence' in items.keys():
                print('A wild Steve appeared, tried to take all your raw resources but got blocked by fence\n')
                continue
            print('A wild Steve appeared and took all your raw resources because you don\'t have a fence!!!!\n')
            for key in items:
                if key in full_resources:
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
                if i not in items.keys() or craft[item][i] > items[i]:
                    print("item cannot be crafted, not enough resources\n")

                    canBeMade = False
                    break
            if item == 'meat' and 'firepit' not in items.keys():
                print('you need a firepit for that')
                canBeMade = False


            if canBeMade == True:
                reduce_stamina(1)
                for i in craft[item]:
                    items[i] -= craft[item][i]
                    if items[i] == 0:
                        items.pop(i, None)


                if item not in items.keys():
                        items[item] = 0


                if item == 'trap':
                    items[item] += 3
                    print(item + " +3\n")

                else:

                    items[item] += 1
                    print(item + " +1\n")

            if 'tent' in items.keys() and 'firepit' in items.keys():
                print("\n**YOU HAVE MANAGED TO SURVIVE!WELL DONE!***")
                print ("TIME: "+ str(datetime.datetime.now()-start_time))
                break


        else:
            print("you can't")

    elif verb == "h" and len(command) > 1:
        if item in current_resources:
            if item == 'treelog':
                if 'axe' not in items.keys():
                    print("you need an axe for that!")
                    continue
                else:
                    random_num = random.randint(0,100)
                    if random_num > 40:
                        if 'apple' not in items.keys():
                            items['apple'] = 0
                        print("apple +1")
                        items['apple'] += 1
            elif item in ['rabbit']:
                if 'trap' not in items.keys():
                    print("you need a trap for that!")
                    continue
                else:
                    items['trap'] -= 1
                    if items['trap'] == 0:
                        items.pop('trap', None)
            random_num = random.randint(0,100)
            if random_num > 93:
                print(item+" +3 \n")
                if item not in items.keys():
                    items[item] = 0
                items[item] += 3
            elif random_num > 80:
                print(item+" +2 \n")
                if item not in items.keys():
                    items[item] = 0
                items[item] += 2
            else:
                print(item+" +1 \n")
                if item not in items.keys():
                    items[item] = 0
                items[item] += 1
            current_resources.remove(item)

        else:
            print(item + " not found, try discovering it")

    elif verb == "u" and len(command) > 1:
        if item not in usable_resources:
            print ("you can't use that, type ?"+ item +" for item help")
            continue
        if item =='meat':
            add_stamina(50)
            print("stamina +50")
        elif item == 'apple':
            add_stamina(10)
            print("stamina +10")
        items[item] -= 1
        if items[item] == 0:
            items.pop(item, None)
    else:
        print("invalid actions, press ?a to see list of actions")
