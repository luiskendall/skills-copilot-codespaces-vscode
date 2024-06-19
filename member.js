function skillsMember() {
    var member = {
        name: "John",
        age: 30,
        skills: ['HTML', 'CSS', 'JS'],
        job: 'Frontend Developer',
        displayInfo: function () {
            console.log('Name:', this.name, 'Age:', this.age, 'Job:', this.job);
        }
    };

    return member;
}