var coolNames = ['Ralph', 'Skippy', 'Chip', 'Ned', 'Scooter'];
module.exports.isACoolName = function(name) {
  return coolNames.indexOf(name) !== -1;
}