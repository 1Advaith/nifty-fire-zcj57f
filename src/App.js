import React, { useState } from "react";
import { motion } from "framer-motion";

// Fallback Button if you're not using Tailwind UI
const Button = ({ children, ...props }) => (
  <button
    {...props}
    className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
  >
    {children}
  </button>
);

export default function App() {
  const [step, setStep] = useState(0);
  const startJourney = () => setStep(1);

  return (
    <div className="z-10 min-h-screen bg-pink-100 p-4">
      {step === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          <h1 className="text-4xl font-bold">Hey... 👀</h1>
          <p className="text-xl">This portal was made just for you.</p>
          <Button onClick={startJourney}>Begin the Journey →</Button>
        </motion.div>
      )}

      {step === 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-white p-6 rounded shadow max-w-xl mx-auto text-left space-y-4"
        >
          <p className="whitespace-pre-wrap text-sm">
            Hi Mandvi, I know you are not into letters, roses, or handmade gifts
            and that is completely okay. So I thought I would write this to you
            in a way you are comfortable with: a simple, honest email. You were
            the first honest and genuine female friend I ever had (not the best
            way to start a proposal, friendzone nahi kar raha main yahan) and
            you have become the one person I truly share everything with: my
            thoughts, my feelings, my stories, my life. When I am with you, I
            never feel like I have to think twice. You accept me exactly the way
            I am. You call me out when I need it, you are patient with me, and
            you somehow manage to listen even though I know you are not much of
            a listener. The way you look at me when I talk with all that
            calmness and attention really makes me happy. I love the way you
            dress. There have been so many moments where I’ve looked at you and
            thought “Wow, she looks amazing” but I just never said it out loud.
            So I am saying it now. You are the best to cuddle with, you are
            genuinely so cute, and yes, our future kids are going to be
            ridiculously good looking. We will always look like a power couple
            no matter where we go. Also, one thing I want to clear up — you keep
            saying I am out of your league. But seriously, have you looked at
            yourself? You are flawless even when you have just woken up. If
            anything, I might be a few centimetres below your league (this has
            not been added after our adventure to find your sunglasses — pehle
            se hi likh ke rakha tha). So here it is, the one thing I really want
            you to know: I love you. I really do. And I hope we will be together
            forever. Always, Advaith Appointy
          </p>
          <div className="text-center space-x-4">
            <Button onClick={() => setStep(0)}>← Back</Button>
            <Button
              onClick={() => {
                setStep(8);
                const audio = document.getElementById("love-song");
                if (audio) audio.play();
              }}
            >
              Continue →
            </Button>
          </div>
        </motion.div>
      )}

      {step === 8 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center space-y-4"
        >
          <h2>You answered everything correctly 🎉</h2>
          <img
            src="https://media.giphy.com/media/111ebonMs90YLu/giphy.gif"
            alt="yay"
            width="150"
            className="mx-auto"
          />
          <h3>This only means one thing...</h3>
          <h1 className="text-2xl font-bold">
            We are meant to be, babygirl 💖
          </h1>
          <div className="space-x-4">
            <Button onClick={() => setStep(1)}>← Back</Button>
            <Button onClick={() => setStep(9)}>Yayy →</Button>
          </div>
        </motion.div>
      )}

      {step === 9 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center space-y-4"
        >
          <h2>Do you want to see something super cringe about me?</h2>
          <div className="space-x-4">
            <Button onClick={() => setStep(8)}>← Back</Button>
            <Button onClick={() => setStep(10)}>Yes, obviously →</Button>
          </div>
        </motion.div>
      )}

      {step === 10 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="video"
        >
          <Button onClick={() => setStep(9)} className="mb-4">
            ← Back
          </Button>
          <video
            src="https://files.catbox.moe/qt6djk.mp4"
            controls
            autoPlay
            className="w-full h-full rounded"
          />
        </motion.div>
      )}

      <audio
        id="love-song"
        src="https://files.catbox.moe/oerkhx.mp3"
        preload="auto"
      />
    </div>
  );
}
