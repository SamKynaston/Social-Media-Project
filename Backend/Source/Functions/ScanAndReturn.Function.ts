import fs from "fs"

export const ScanAndReturn = (dir) => {
    const ToReturn = []

    const paths = fs.readdirSync(dir, { withFileTypes: true })
        .filter(Item => !Item.isDirectory())
        .map(Item => Item.name)
    
    for (const FilePath of paths) {
        ToReturn.push(FilePath)
    }

    return ToReturn
}