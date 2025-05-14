/**
 * Converts image path based on environment.
 * @param {string} appendPath - The subdirectory path to append.
 * @param {string} imageName - The image file name.
 * @param {boolean} isDev - Whether the environment is development.
 * @returns {string} - The full image URL or path.
 */

import appConfig from '../configs/appConfig.json';

function convertServerImage(appendPath, imageName) {
    const basePath = appConfig['isDev']
        ? 'http://localhost:3000/images/'
        : '/images/';
    // Ensure no leading/trailing slashes
    const cleanAppendPath = appendPath.replace(/^\/|\/$/g, '');
    const cleanImageName = imageName.replace(/^\/|\/$/g, '');
    return `${basePath}${cleanAppendPath}/${cleanImageName}`;
}

export default convertServerImage;
