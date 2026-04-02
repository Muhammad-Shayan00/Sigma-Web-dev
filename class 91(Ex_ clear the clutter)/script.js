import fsn from "fs";
import fs from "fs/promises";
import path from "path";

let basepath = process.cwd();//take the current path where the file exist

let all_files = await fs.readdir(basepath)//array of all files

for (let eachfile of all_files) {

    //to get the each extention
    let parts = eachfile.split(".")
    let extention = parts[parts.length - 1]
    let path_of_extensionfolder = path.join(basepath, extention)

    if (extention !== "json" && extention !== "js" && extention !== "") { //ignore js and json file
        if (!fsn.existsSync(path_of_extensionfolder)) { //if folder doesn't exist make it then move files
            await fs.mkdir(path_of_extensionfolder)
            await fs.rename(path.join(basepath, eachfile), path.join(path_of_extensionfolder, eachfile))

        }
        else { //if folder already exist so just move files
            await fs.rename(path.join(basepath, eachfile), path.join(path_of_extensionfolder, eachfile))

        }
    }


};
