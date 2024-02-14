# Wedding Wish Project

This project is a simple wedding wish application built with Next.js 14, featuring server-side actions and MongoDB for data storage.

## Getting Started

Follow these instructions to get your project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14 or later)
- npm (usually comes with Node.js)
- MongoDB URI

### Installation

1. **Clone the repository**

   ```bash
   git clone [repository_url]
   cd wedding-wish

   ```

1. Install dependencies

Navigate to the project directory and run:

```
bash

npm install
```

2. Set up the environment variables

Create a .env.local file in the root directory of the project and add your MongoDB URI:

```
MONGO_URL=mongodb+srv://[your_mongodb_uri]
```

Replace [your_mongodb_uri] with your actual MongoDB connection string.

3. Run the development server

Start the development server using the following command:

```bash
npm run dev
```

Open http://localhost:3000 with your browser to see the result.

### Folder Structure

Here is an overview of the folder structure:

```
wedding-wish
├─ .env.local
├─ .gitignore
├─ next/
├─ app/
│  ├─ actions/
│  │  └─ wishAction.js
│  ├─ components/
│  │  ├─ WishForm.js
│  │  └─ WishList.js
│  ├─ models/
│  │  └─ Wish.js
│  ├─ lib/
│  │  ├─ db.js
│  │  └─ datafromdb.js
│  ├─ globals.css
│  ├─ layout.js
│  └─ page.js
├─ node_modules/
├─ public/
│  └─ favicon.ico
└─ ...
```

### How to Use

After starting the development server, navigate to the main page to see the wedding wish form. Users can submit their wishes, which will be displayed in a list below the form.

### Contributing

If you'd like to contribute to the project, please fork the repository and create a pull request with your changes.

### License

This project is open source and available under the MIT License.
