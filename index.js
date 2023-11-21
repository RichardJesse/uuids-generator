var existingUUIDs = new Set();

/**
 * This is a function that autogenerates a version 4 UUID
 * and ensures that the UUID is unique
 * 
 * @returns{uuid}
 */
function generateUID() {
    var uid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });

    if (existingUUIDs.has(uid)) {
        return generateUID();
    }

    existingUUIDs.add(uid);

    console.log(uid);
}

module.exports = generateUID;