/* منصة عبدالرحمن حماده */


/* تسجيل الدخول */

function openLogin() {

    document
        .getElementById("loginModal")
        .classList.add("active");

}


function closeLogin() {

    document
        .getElementById("loginModal")
        .classList.remove("active");

}


/* بيانات الطالب */

function loginStudent() {

    const name =
        document
        .getElementById("studentName")
        .value
        .trim();

    const email =
        document
        .getElementById("studentEmail")
        .value
        .trim();


    if (!name) {

        alert("اكتب اسمك الأول يا بطل 😄");

        return;
    }


    if (!email) {

        alert("اكتب البريد الإلكتروني.");

        return;
    }


    localStorage.setItem(
        "studentName",
        name
    );

    localStorage.setItem(
        "studentEmail",
        email
    );


    closeLogin();


    alert(
        "🎉 أهلاً يا " +
        name +
        "\n\n" +
        "نورت منصة عبدالرحمن حماده ❤️"
    );

}


/* الكورسات */

function openCourse(courseName) {

    document
        .getElementById("courseTitle")
        .innerText = courseName;


    document
        .getElementById("courseModal")
        .classList.add("active");


    localStorage.setItem(
        "lastCourse",
        courseName
    );

}


function closeCourse() {

    document
        .getElementById("courseModal")
        .classList.remove("active");

}


/* زر ابدأ المذاكرة */

function goToCourses() {

    document
        .getElementById("courses")
        .scrollIntoView({
            behavior:"smooth"
        });

}


/* تحميل اسم الطالب */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const savedName =
            localStorage.getItem(
                "studentName"
            );


        if (savedName) {

            console.log(
                "أهلاً يا " +
                savedName
            );

        }

    }
);


/* إغلاق النوافذ */

window.addEventListener(
    "click",
    function(event) {

        const loginModal =
            document.getElementById(
                "loginModal"
            );

        const courseModal =
            document.getElementById(
                "courseModal"
            );


        if (event.target === loginModal) {

            closeLogin();

        }


        if (event.target === courseModal) {

            closeCourse();

        }

    }
);
