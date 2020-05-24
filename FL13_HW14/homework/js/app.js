function Student(name) {
  this._name = name;
  this.getName = function () {
    return this._name;
  }
}


Student.prototype.addHhomeworkResult = function (topic, success) {
  const result = {
    topic: success
  }
  this._homeworkResults.push(result)
}