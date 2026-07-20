//-----------about me---------------
var tablinks = document.getElementsByClassName("tab-links");
            var tabcontents = document.getElementsByClassName("tab-contents");

            function opentab(tabname) {
                for(tablink of tablinks){
                    tablink.classList.remove("active-links");
                }
                for(tabcontent of tabcontents){
                    tabcontent.classList.remove("active-tab");
                }
                event.currentTarget.classList.add("active-links");
                document.getElementById(tabname).classList.add("active-tab");
            }


//----------------menu button---------

var sidemeu = document.getElementById("sidemenu")

    function openmenu(){
        sidemeu.style.right = "0";
    }

    function closemenu(){
        sidemeu.style.right = "-200px";
    }

    document.querySelectorAll('.work').forEach(card => {
    card.addEventListener('click', function (e) {
        if (e.target.closest('.layer a')) return; // let the actual link still work
        const isOpen = this.classList.contains('touch-active');
        document.querySelectorAll('.work.touch-active').forEach(c => c.classList.remove('touch-active'));
        if (!isOpen) this.classList.add('touch-active');
    });
});

//----------for saving data from contact form to sheets--------

const scriptURL = 'https://script.google.com/macros/s/AKfycbyqtjEH4WcTwhI9qnozbslOa61buT2EDV-5yrz6KQBpiZe-JhxJ8bzduIQu7H3cDXvZ/exec'
	const form = document.forms['YOUR_FORM_NAME']
    const msg = document.getElementById("msg")

	form.addEventListener('submit', e => {
		e.preventDefault()
		fetch(scriptURL, { method: 'POST', body: new FormData(form) })
			.then(response => response.json())
			.then(response => {
                msg.innerHTML = "Message sent successfully"
                setTimeout(function(){
                    msg.innerHTML = ""
                }, 5000)
                form.reset()
            })
			.catch(error => console.error('Error!', error.message))
	})

