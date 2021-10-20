# pxlpro-jobs

## How does the App work?

1. The njk engine is added in the server using Hapi in server.views.

2. The main App data is written in model.js, which will be imported to the server and added inside the engine configuration as context: DataModel.

3. Then in the server imported Routes for every page are added.

4. Templates used by the njk engine are in templates folder, which is divided by includes, used for reusable pieces of code (like components), layouts, used as skeleton for every page created. Finally i added a pages folder as here the content is going to be different for every page and feels more organised.

5. The provided gulpfile is used for automated tasks and compiling scss styles in to css files, which lives in pubic/css folder.

6. The .pretierrc file is used to keep styles according to the code syntax standards required.

## Desgin Approach

The approach used is based in mobile first desgin, as i believe this makes all the process easier and more consistent.

All the sections created in the home page look potentially reusable, so i decided to create them as separated includes and include them in the page file. These components have been styled in separated files inside scss components folder.

The page looks responsive according to the size screen using media queries, from x-small size to large screen size. For alignment and responsive design Flex and Grid have been conveniently used to make the process easier and more efficient.

General Styles have been added in base.scss, and styles.scss it has been just used to import all the partials.
