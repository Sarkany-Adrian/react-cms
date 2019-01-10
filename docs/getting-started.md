## Getting Started

#### Prerequisites

1. Git installed

    + OSX:
        It comes by default with Command Line Tools.

        ```
            xcode-select --install
        ```

    + Ubuntu:

        ```
            sudo apt-get install git
        ```

    + Windows:

        Download and install [Git for Windows](https://gitforwindows.org/)

2. Make sure to have at least node **v10.6.0** and npm **v6.4.1** installed

    It is recommended [nvm](https://github.com/creationix/nvm) to install and manage
    NodeJS versions locally.


    NOTE: If **nvm**  is installed, one could simply run ```nvm use``` inside the root project and if the specific
    required versions are installed, one will switch directly to those versions due to the presence of the
    **nvm.rc** file in the project root.

3. Clone the project
  ``` git clone git@github.com:Sarkany-Adrian/react-cms.git```

4. Install project dependencies (make sure not to forget **step 2**)

5. Create a ```.env``` file inside the project root and copy the content of the ```env.example``` inside it

6. Start the project ```npm start```
