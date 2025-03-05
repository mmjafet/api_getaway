const logger = (req,res,next) =>
{
console.log(`[$new Date().toISOString()] ${req.method} ${req.originalurl}`);


}

module.exports = {logger}