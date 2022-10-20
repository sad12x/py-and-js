# store
class Person:
  def  __init__(self):
    self.name="" # sting
    self.age=0

# inputs
def getPeople():
  people = []
  for x in range(1):
    newPerson= Person()
    newPerson.name= input("Enter the new person's name ::").capitalize()
    newPerson.age= int(input("Enter the new person's age ::"))

    people.append(newPerson)

  return people



# process
def display(allpeople):
  for people in allpeople:
    print(f"The name is {people.name} and the age is", str(people.age))

# main program
people = getPeople()
display(people)




