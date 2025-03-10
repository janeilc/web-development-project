function calculate_grade(){
    var grade = document.getElementById('grade_input').value;
    if(grade >= 90){
        document.getElementById('grade_output').innerHTML = 'You got an A'
    }else if(grade >= 80){
        document.getElementById('grade_output').innerHTML = 'You got an B'

    }else if(grade >= 70){
        document.getElementById('grade_output').innerHTML = 'You got an C'

    }else{
        document.getElementById('grade_output').innerHTML = 'Fail'
    }
}