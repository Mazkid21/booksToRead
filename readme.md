books to read readme

//LINKS:

HEROKU 

https://gentle-coast-85328.herokuapp.com/

//WIREFRAMS:

images are added to the REPO 

//TECH USED:

HTML 
CSS 
JAVASCRIPT 
JQUERY 
AJAX 
EXPRESS 
PASSPORT 
EJS 
NODE.JS
MONGOOSE 
MONGO 
MOCHA 
CHAI 


//MY THOUGHTS 

I started this project out struggling to think of an idea that I liked and would be fun to build and usefull to use. I had some ideas for apps to build but was limited by the API's avaliable. 

I came up for the idea of my app when Nick suggested getting the book "design of everyday things", the first thing I do when I get a book suggestion is go into my notes app on my phone and write it down in a never ending list. So I thought why not build an app for that! 

I was super nervous about how to structor all my files and folders. I decided I would tackle one thing at a time, so I started with passport to get my login/out function working. It took me a couple attempts to get my passport working correctly, but once I had that going I had a great starting point for the rest of my app. 

I then got overwhelmed of the idea of setting up my extrenal API calls. So I went to tackle something not as scary...design. 
I started laying out my pages that I would need and designing them. 

Once I had a design, then I had no where left to hide, so I started tackling my API calls. I used Google Book API. Google is amazing and had very clear documentatio on how to use the app, get API keys ect. So I had a good starting place. 

I first went into postman and made sure that the api was working the way I thought. And it was!!! So I then had to try to tackle getting it working in the app! 

I got the api calls working and getting the right data from it...BUT getting to appear on the page the way I wanted to was a struggle! It took some time to see how it was coming back and what I need to call to get them on the page. 

I finnally figured out thwo to get my data to appear correctly on the page, so a user could see the book he/she searched for...BUT you could only search for one word books. Everytime you put a space in the iput field it would not search correctly. I knew I needed a + inbetween the spaces so the API URL was correct, and knew that I had done it for a lesson. I went back to an old lesson and tried it the way I did for that lesson, but for some reason could not get it to work! After sitting down with David for a little he helped me figure it out! (stupid spelling errors)

Once I had my search input working fully with the API I needed to figuee out how to limit the searches. Since it was googles api you could search Dan Brown and get a 100 diffrent responses. I did not want to have to user scroll through all 100 to find the right one. So since it was googles api I knew the searches were pretty accrate so I limited the searches to 3. It works but the code to accompish it is not very DRY. 

After getting all my searchs to appear on the page corecctly and after I made them look pretty. I had to figure out how I was going to save them to the users DB. 

I started by adding a save button to each search result (which is in its own div)...that was the easy part. Then came tackling getting the button to actually save the data. This took me the most time to figure out. Again it was finding the right way to grab and store the data. 

I finnally figured out how to get the data to save to the data base but I was completly fried and lost on how I was going to show the user thata data agian on their user page. I went back and fourth if i was going to show all the saved books on the same page as the search field. But came to the conclusion that it would be too much info on one page, so I created a userBooks page with EJS 

I AM SOOOO HAPPY I did!!! 

I was pretty lost on how to accomplish my routes and functions for the new page to get the data to appear. I thought I might be able to do it with EJS kind of the same way I made sure only that user could see that page. It took some trial and error and alot of googing for the EJS Syntax but I finally got one book to appear!!!! 

but that created another problem. If the user had no books saved to their DB yet, but went to their book page it would break as it was trying to load data that wasnt there. I thought of using and if statment and knew the genreal wat to do it but took some time to get the right syntax. This was a big moment for me because it was the first real time I made my javascript work all from my head, i didnt have to look at old lessons or anything, just knew what I needed to fix my problem! 

Once i got that solved i could peice together the rest of my userBooks.ejs page to show the users books!! 

I still have a decent amoutn of UX stuff to be added to make the app easier to use. I would also like a DELETE button and a BUY button where they are directed to google so they can buy the book! Also need to tweak my userBooks ejs to show all user books at the moment I can only show 5. And i need to dry out that code. 

All together I am super proud of the way it turned out!!! 