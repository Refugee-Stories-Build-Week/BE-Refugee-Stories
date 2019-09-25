# BE-Refugee-Stories

### BACK END DOCUMENTATION FOR REFUGEE-STORIES

### Send all request to:

    https://refugee--stories.herokuapp.com

### Authentication

Any requests other than login,register, GET /users and GET /stories, require a header with a VALID TOKEN.

    Axios.post(
      'https://refugee--stories.herokuapp.com/users/', data,
    {
      headers: {
          'Authorization': yourTokenHere
      }
    })
    .then( ( response ) => {
    console.log( response )
    })
    .catch()

---

### DATA STRUCTURES

The data is now persistant. If you want me to wipe the db for any reason, let me know! This is how the data structure looks currently. When there are changes I will notify you and update it here.

    ```
    // USERS TABLE

    {
        username: string
        first_name: string
        last_name: string
        password: string
        role: string
        created_at: "timestamp"
        updated_at: "timestamp"
    }
    ```

    ```
    // STORY TABLE

    {
        author: string
        title: string
        approved: boolean
        body: string
        country: string
        url_img: string
        approved_by_user_id: number
    }
    ```

# USERS ALREADY SEEDED

    ```
    username: user,
    password: 1234asdf
    ```

---

# ROUTES FOR USER

## POST /users/register

    https://refugee--stories.herokuapp.com/users/register

#### make a register request

1. Required Fields

    ```
        username: string
        password: string
    ```

2. Optional

    ```
        first_name: string;
        last_name: string;
        role: string;
    ```

3. Headers

    ```
        Content-type     application/json
    ```

## POST /users/login

    https://refugee--stories.herokuapp.com/users/login

- make login request

  1. Required Fields

    ```
        username: string
        password: string
    ```

## GET /users/

    https://refugee--stories.herokuapp.com/users/

## PUT /updateUser/:id

    https://refugee--stories.herokuapp.com/users/updateUser/:id


#### Requirement:
- id is the path variable
- validation header with a validation token
- A json object with the desired data to update

### DELETE /deleteUser/:id

    https://refugee--stories.herokuapp.com/users/deleteUser/:id

# ROUTE FOR STORY

### POST /stories/submit

    https://refugee--stories.herokuapp.com/stories/submit

1. Required Fields

    ```
        author: string
        title: string
        body: string
        country: string
    ```

2. Optional

    ```
    url_img: string;
    approved: boolean;
    ```

### GET ALL STORIES

#### GET /stories/

    https://refugee--stories.herokuapp.com/stories/all

datas you will be receiving:

    ```
        id: number
        author: string
        title: string
        approved: boolean
        body: string
        country: string
        url_img: string
        approved_by_user_id: number
        created_at: timestamp
        updated_at: timestamp
    ```

#### GET /stories/all/:id

    link: https://refugee--stories.herokuapp.com/stories/all/:id

datas you will be receiving:

    ```
        id: number
        author: string
        title: string
        approved: boolean
        body: string
        country: string
        url_img: string
        approved_by_user_id: number
        created_at: timestamp
        updated_at: timestamp
    ```

### GET THE APPROVED STORIES

#### GET /stories (All Approved Stories)

    https://refugee--stories.herokuapp.com/stories/

datas you will be receiving:

    ```
        id: number
        author: string
        title: string
        approved: boolean
        body: string
        country: string
        url_img: string
        approved_by_user_id: number
        created_at: timestamp
        updated_at: timestamp
    ```

#### GET /stories/:id (Get an approved story)

    https://refugee--stories.herokuapp.com/stories/:id

datas you will be receiving:

    ```
        id: number
        author: string
        title: string
        approved: boolean
        body: string
        country: string
        url_img: string
        approved_by_user_id: number
        created_at: timestamp
        updated_at: timestamp
    ```

### PUT /stories/:id

    https://refugee--stories.herokuapp.com/stories/:id


Requirement:
- id is the path variable
- validation header with a validation token
- A json object with the desired data to update

### DELETE /stories/:id

    https://refugee--stories.herokuapp.com/stories/:id
