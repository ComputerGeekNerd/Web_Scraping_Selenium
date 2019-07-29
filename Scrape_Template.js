//Initialising web driver by including web driver software as selenium and web driver object  using By command
var webdriver = require('selenium-webdriver'),By = webdriver.By;

//Initialising Web Driver Hardware for Chrome browser. Build() will open the browser
var driver = new webdriver.Builder().forBrowser('chrome').build();

//STEP 1: Get the URL. In this case we are using a local machine HTML file
driver.get('/home/Desktop/Example.html')


//Waiting for 2 seconds before scraping
Pause(2,ScrapExample);


//STEP 2: Scrap the USL and get data
function ScrapExample ()
{
     //All Selenium statements and methods are here
     console.log("Scrapping the page.......");//Log to identify if the code is working or not.
     // To find particular elemnt in the HTML code of the webpage by using id and send the key to it
     driver.findElement(By.id('name')).sendKeys("Raksha A");
     //To find radio buttonn element using xpath and finding the radio button with value 'female'
     driver.findElement(By.xpath('//input[@value="female"]')).click();
     //To find check box element using name field with value 'vehicle1' and '.click()' function is called whenever we need to select/click elements like radio or check boxes.
     driver.findElement(By.name('vehicle1')).click();


     //To iterate through the list of fruit elements and display them all using id element
     driver.findElements(By.id('fruits')).then(function(elements){
          for (var i = 0; i < elements.length; i++){
               elements[i].getText().then(function(text){
                    console.log('List of fruits \n'+text)
               });
          }
     });

     //Getting the hyper link element by using partialLinkText which has search query value = 'jazeb121'.
     driver.findElement(By.partialLinkText('jazeb121'))
     .getAttribute('href').then(function(value){
          console.log('1st link '+ value)
     });

     //Getting the hyper link element by using linkText which has Anchor tag value = 'Jazeb Akram'.
     driver.findElement(By.linkText('Jazeb Akram'))
     .getAttribute('href').then(function(value){
          console.log('2nd link '+ value)
     });

     Pause(3,QuitDriver); //Pausing 3 sec and then caling QuitDriver func. to close the browser
}

//Adding Selenium wait. Time= wait time in seconds, FuncName = function name which has to be paused.
function Pause(Time,FuncName)
{
     setTimeout(FuncName,Time*1000);//Time parameter here must be given in milliseconds. Hence, Time*1000
}

//Closing and quitting the webdriver that we opened for scraping
function QuitDriver()
{
     driver.close()
     driver.quit()
}



