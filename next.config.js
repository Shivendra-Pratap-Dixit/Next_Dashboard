
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {nextConfig,
sassOptions:{
    includePaths:[path.join(__dirname,'styles')]
}
};
