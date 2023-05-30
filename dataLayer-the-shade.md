# The Shade of it All App

## Data layer

### Data (Redux Store)

- **Collection of Drag Queens** (Slice: DragQueens)
  - Queen:
    - id: string
    - name: string
    - age: number
    - season: number
    - rank: string
    - hometown: string
    - memorable quote
    - image: string
- **Current Queen** (Slice: CurrentQueen)
- **User** (Slice: User)
- **UI State** (Slice: UI)
- **Feedback** (Slice: Feedback)

### Actions

- addQueen()
- removeQueen()
- updateQueen()
- loadQueens()
- filterQueens()
- loginUser()
- logoutUser()
- provideFeedback()
- showLoader()
- hideLoader()
- openModal()
- closeModal()

## API Operations (Custom Hooks)

- useQueens() – Including getQueens(),getQueenById() addQueen(), updateQueen(), removeQueen()
- useUser() – Including loginUser()
- useToken() - getDataToken()
- useLocalStorage() - setToken() , getToken() , removeToken()

## Components (Using React Router DOM for routing)

### App

- Receives a dispatch action
- Check if there is token in localStorage with getToken() action
- If a token exist navigate to QueensList Page, else navigate to Login page
- Renders Layout component

### Header

- Renders a nav bar component
- Shows a logo

## NavBar

- Shows a logout, home and add navLinks
- Create logoutActionOnclick to call logoutUser() and removeToken() from useToken custom hook
- Pass the logoutActionOnclick to logout Button

### LoginPage

- Renders LoginForm
- Receives a dispatch
- Create a handleOnSubmit(receives userCredentials from own state Login form) function to call loginUser(receive userCredentials from handleOnsubmit) from useUser customhook, extract data token with getDataToken() from useToken custom hook, dispatch loginUserActionCreator with extracted data,and calls setToken() from useLocalStorage custom hook and navigate to QueensListPage

### LoginForm

- Have a own state.
- Receives a handleOnSubmit action
- Create a functionOnHandleOnSubmit, calls event.prevent.default(), calls handleOnsubmit(userCredentials) and reset UserCredentials
- Shows inputs for username and password.
- Show a button LOGIN

### CreateFormPage

- Renders a form component
- Receives a dispatch
- Create a handleOnSubmit( receives queen data from form state) function , call a addQueen(receives queen from handleOnSubmit) from useQueens customHook, dispatch addQueenActionCreator(Queen data from handleOnsubmit) and navigate to QueensListPage

### UpdateFormPage

- Renders a form component receives a queenData props
- Receives a dispatch
- Create a handleOnSubmit( receives queen data from form state) function , call a updateQueen(receives queen from handleOnSubmit) from useQueens customHook, dispatch updateQueenActionCreator(queen data from handleOnsubmit) and navigate to QueensListPage

### Form

- Has own state.
- If it receives queenData from props , set ownState propierties from queenData props
- Shows inputs fields for the image, name, age, season, rank, hometown, memorable Quote
- Show a button component

### QueensListPage

- Receives dispatch
- Call getQueens() from useQueens custom hook and dispatch loadQueensActionCreator()
- Receives a collection of Queens from store with useAppSelector(state)
- Render QueensList

### QueensList

- Receives a collection of Queens from props
- Renders as many QueenCARDS as queens are in the collection received
- Create a deleteActionOnClick(receives an Id) function who calls removeQueen(receives id) from useQueens custom hook, and removeQueenActionCreator(id)
- Create a detailsActionOnSubmit(id) to navigate to detailsPage
- MODIFY QUEEN?

### QueenCard

- Receives queen data from props, receives a deleteActionOnSubmit(id) to delete button, receives a detailsActionOnSubmit(id)

- Shows image, name name, age, season, rank, hometown, memorable Quote

- Shows a delete Button and edit button

### QueenDetailsPage

- Calls getQueenById from useQueens custom hook to catch a queen.
- Create editActionOnclick which navigates to updateFormPage(queen)
- Shows name, age, season, rank, hometown, memorable Quote and image
- Shows edit button and delete button

### Button

- Receives an ActionOnClick
- Receives a text/icon
- Shows a button with the received text/icon
