function openCard() {
    let envelope = document.querySelector(".envelope");
    envelope.classList.add("open");

    setTimeout(() => {
        document.querySelector(".envelope-container").style.display = "none";
        document.getElementById("card").style.display = "block";
        startTyping();
        showPopup();
    }, 1200);
}

let text = `I don’t say this enough,
maybe I don’t even know how—
but somewhere in between ordinary days,
you became someone
I can’t imagine losing now.

We didn’t grow up together,
we don’t share the same blood,
but you understand me
in ways even family sometimes doesn’t.

You came into my life quietly,
like it didn’t mean much at first—
just another person,
just another day—
and now you’re someone
I thank life for, every single day.

You’ve seen me at my worst—
the overthinking, the silence, the moods—
and you stayed,
like leaving was never even an option.

I don’t know what I did to deserve that,
but I’m really glad I have you.

You’re not just a best friend,
and “brother” still feels too small a word
for what you are to me—
because some bonds
can’t really be explained.

And I hope you know this too—
you are not hard to love,
you were never “too much,”
never a burden,
never someone people just tolerate.

You are someone people are lucky to have.

You deserve the kind of love
that stays without being asked,
that understands without explaining,
that chooses you—
even on your worst days.

You deserve peace in your mind,
softness in your life,
and people who never make you question
your worth.

Because the truth is—
you are worth everything good
this world has to offer.

And if you ever forget that,
I’ll be here to remind you
as many times as it takes.

Just know this—
no matter where life takes us,
no matter how things change,
you’ll always have a place in my life.

Not because you have to—
but because I choose you.
Every time.`;

let i = 0;

function startTyping() {
    let speed = 25;
    function type() {
        if (i < text.length) {
            document.getElementById("poem").innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

function showPopup() {
    setTimeout(() => {
        document.getElementById("popup").style.display = "block";
    }, 6000);
}

function toggleTheme() {
    document.body.classList.toggle("dark");
}
