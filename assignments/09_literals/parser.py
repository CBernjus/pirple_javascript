import os
from bs4 import BeautifulSoup

__location__ = os.path.realpath(os.path.join(
    os.getcwd(), os.path.dirname(__file__)))

__html_filename__ = "index.html"
__js_filename__ = "literals.js"

userInput = input("Path to HTML file (in same directory): ")
if os.path.isfile(os.path.join(__location__, userInput)):
    __html_filename__ = userInput

__html_path__ = os.path.join(__location__, __html_filename__)
__js_path__ = os.path.join(__location__, __js_filename__)

jsFile = open(__js_path__, "w")


def numOfChildren(element):
    return len(list(element.children))


def writeConst(name, value):
    jsFile.write('const ' + name + ' = `' + value + '`;\n')


def getChildren(element, prefix):
    children = []
    for i in range(numOfChildren(element)):
        child = list(element.children)[i]
        if(child.name):
            name = prefix + "_" + \
                (str(i) if i > 0 else "") + \
                child.name
            children.append((child, name))
    return children


def replaceValueWithName(string, value, name):
    return string.replace(value, "${" + name + "}")


def inlineString(string):
    return ' '.join(string.replace('\n', '').replace('\t', '').split()).strip()


def createConstValue(element, name, children):
    value = str(element)
    if len(children) >= 1:
        for child in children:
            value = replaceValueWithName(value, str(child[0]), child[1])
    else:
        childString = element.string
        if childString and childString != "":
            childName = name + "_string"
            writeConst(childName, inlineString(childString))
            value = replaceValueWithName(value, childString, childName)
    value = inlineString(value)
    return value


def parseElement(element, name):
    children = getChildren(element, name)
    value = createConstValue(element, name, children)
    for child in children:
        parseElement(child[0], child[1])
    writeConst(name, value)
    return value


def createLiteralsFor(filepath):
    htmlFile = open(filepath, "r")
    newHtmlFile = open(os.path.join(__location__, "processed.html"), "w")
    soup = BeautifulSoup(htmlFile.read(), "html.parser")
    head = soup.head
    body = soup.body

    parseElement(body, "body")
    jsFile.write('document.body.innerHTML = body.toString();')

    body.clear()

    literalsTag = soup.new_tag('script')
    literalsTag.attrs['src'] = __js_filename__
    body.insert(0, literalsTag)

    newHtmlFile.write(str(soup.prettify()))


createLiteralsFor(__html_path__)
