var absFeedBack = document.getElementsByClassName('abs-feed-back')[0];
var feedback = document.getElementsByClassName('feedback-div')[0];
var count = 0;
var currentIndex = 0;
var currentText = '';
var currentfeedb = '';
console.log(feedback);
function openFeedBack() {
    count = 0;
    feedback.style.display = 'none';
    absFeedBack.style.display = 'block';
}
function closeFeedBack() {
    feedback.style.display = 'inline-flex'; absFeedBack.style.display = 'none';
}
function chooseOption(index, text) {
    currentIndex = index;
    currentText = text;
    event.stopPropagation();
    document.getElementById('feedTextEmail').style.display = 'none';
    var options = document.getElementsByClassName('bottom-feed-li');
    if (!options[index].classList.contains('selected-feed-li')) {

        for (let i = 0; i < options.length; i++) {
            if (i === index) {
                options[index].classList.add('selected-feed-li');
                document.getElementById('feed-b').style.display = 'block';
                document.getElementById('feedText').style.display = 'none';
                document.getElementById('topDiv').style.height = '110px';
                document.getElementById('feedText').style.display = 'none';
                document.getElementById('feedTextInput').style.display = 'block';
                document.getElementById('feedTextInput').innerHTML = text;
                document.getElementById('textInput').style.display = 'block';
                document.getElementById('nextFeed').innerHTML = 'Next';
            } else {
                options[i].style.display = 'none';
            }
        }
    } else {
        for (let i = 0; i < options.length; i++) {
            if (i === index) {
                options[index].classList.remove('selected-feed-li');
                document.getElementById('feed-b').style.display = 'none';
                document.getElementById('feedText').style.display = 'block';
                document.getElementById('topDiv').style.height = '170px';
                document.getElementById('feedText').style.display = 'block';
                document.getElementById('feedTextInput').style.display = 'none';
                document.getElementById('textInput').style.display = 'none';
                document.getElementById('textEmail').style.display = 'none';
                document.getElementById('bottomInput1').classList.remove('addedInput');
                document.getElementById('bottomInput1').style.display = 'none';
                count = 0;
            } else {
                options[i].style.display = 'block';
            }
        }
    }
}
function stopEvent() {
    event.stopPropagation();
}
function nextFeedBack(text1, text2) {
    if (count === 0) {
        currentfeedb = document.getElementById('textInput').value;
        document.getElementById('textInput').style.display = 'none';
        document.getElementById('textEmail').style.display = 'block';
        document.getElementById('bottomInput1').classList.add('addedInput');
        document.getElementById('bottomInput1').style.display = 'block';
        document.getElementById('feedText').style.display = 'none';
        document.getElementById('feedTextInput').style.display = 'none';
        document.getElementById('feedTextEmail').style.display = 'block';
        document.getElementById('nextFeed').innerHTML = 'Send';
        document.getElementById('bfs').innerHTML = text1.value ? text1.value : 'No Text';
    }
    if (count === 1) {
        var val = currentIndex + 1;
        var value = '';
        if (val === 1) {
            value = 'like';
        } else if (val === 2) {
            value = 'dislike';
        } else {
            value = 'idea';
        }
        const obj = {
            email: document.getElementById('textEmail').value,
            feedback_type: value,
            feedback_value: currentfeedb
        };
        var url = window.location.protocol + '//' +  window.location.hostname + ':' + window.location.port + '/api/master/feedback' ||
            window.location.protocol + + '//' +  window.location.hostname + '/api/master/feedback';
        console.log(url);
        console.log(obj);
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then(response => response.json())
            .then(json => {
                console.log(json);
                document.getElementById('textInput').value = '';
                document.getElementById('textEmail').value = '';
                var options1 = {
                    'title': 'Success',
                    'style': 'Success',
                    'message': 'Thanks For The Submitting feedback',
                   
                    };
                    var n1 = new notify(options1);
                    n1.show();
                closeFeedBack();
            });
    }
    count++;
}
function chooseOptionInput() {
    document.getElementById('textInput').style.display = 'block';
    document.getElementById('textEmail').style.display = 'none';
    document.getElementById('bottomInput1').classList.remove('addedInput');
    document.getElementById('bottomInput1').style.display = 'none';
    document.getElementById('feedText').style.display = 'none';
    document.getElementById('feedTextInput').style.display = 'block';
    document.getElementById('feedTextInput').innerHTML = currentText;
    document.getElementById('feedTextEmail').style.display = 'none';
    document.getElementById('nextFeed').innerHTML = 'Next';
    count = 0;
}
