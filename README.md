# Development

### Link to Deployed Website
IF you used the stencil code, this is https://chunkyblob223.github.io/Development/

### Goal and Value of the Application
The goal of this application is to create a webpage that represents a simple hat shop. It is interactive in the filters and sorting aspect that I have implemented, serving as a basic online shop that can be interacted with by any user.

### Usability Principles Considered
The usability principles considered were clarity, relevance and availability. I made sure that the webpage was simple and easy to use, with each component on the side-bar labeled well and intuitive to understand. I created a my cart button that updates a cart when you add and remove items using each button. This makes sense considering its a mock hat shop. In terms of availability, I made sure that the website is easy to access and navigate, going back and forth using checkboxes.

### Organization of Components
My components are organized in a clear manner. I created two main divs, excluding the header, that hold the side bar and the grid of items. Within each item, I created several other divs to neatly organize the components in a clear way that makes it easy for the user to understand. Upon selecting a filter, sorting feature or cart feature, the displayed elements get updated within my map function in the app return statement. This allows me to easily update filters in one large function and then modify the data that is being displayed. I create several useState variables to manipulate the hat-data filters, while keeping track of every component that is changed. 

### How Data is Passed Down Through Components
As briefly explained above, I have a large function called selectHandler() which I pass into the buttons which deals with most of the filtering logic as well as the updating of the useState variables, which ultimately are used to populate a single variable called sortedData which is passed into the return statement. This is responsible for rendering all the data as it is upated through the user inputs. 

### How the User Triggers State Changes
The user triggers state changes through adding and removing to cart, which update the items that go into myCart as well as modifies the total. The user selects filters and sorting features in the sidebar as checkboxes, where data is then combined into one sortedData variable that is mapped through. Thus, by selecting these checkboxes and buttons, the user is able to add to/modify useState variables that are then used in combination to generate data passed into the return statement of the app.

