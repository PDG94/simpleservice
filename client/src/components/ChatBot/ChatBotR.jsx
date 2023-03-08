import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";

export default function ChatBotR() {
  const [opened, setOpened] = useState(false);
  const toggleFloating = ({ opened }) => {
    setOpened(opened);
  };

  const steps = [
    {
      id: "Greet",
      message: "Hello, Welcome to Simple Service",
      trigger: "ask Name",
    },
    {
      id: "ask Name",
      message: "Please enter your name",
      trigger: "waiting",
    },
    {
      id: "waiting",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: "Hi {previousValue}, Please select your consult",
      trigger: "Questions",
    },
    {
      id: "Volver a preguntar",
      message: "You want to know something more",
      trigger: "Questions10",
    },
    {
      id: "Questions",
      options: [
        {
          value: 1,
          label: "Account",
          trigger: "Account",
        },
        {
          value: 2,
          label: "Payments",
          trigger: "Payments",
        },
        {
          value: 3,
          label: "Reviews",
          trigger: "Reviews",
        },
        {
          value: 4,
          label: "Refunds",
          trigger: "Refunds",
        },
        {
          value: 5,
          label: "Services",
          trigger: "Services",
        },
      ],
    },

    {
      id: "Account",
      options: [
        {
          value: 1,
          label: "How can I register for the app?",
          trigger: "answer1",
        },
        {
          value: 2,
          label: "How to delete my account?",
          trigger: "answer2",
        },
        {
          value: 3,
          label: "How can I recover my account if I forgot my password?",
          trigger: "answer3",
        },
        {
          value: 4,
          label: "Main Menu",
          trigger: "Questions",
        },
        {
          value: 5,
          label: "Next",
          trigger: "Account1",
        },
      ],
    },

    {
      id: "Account1",
      options: [
        {
          value: 1,
          label: "How to change profile picture?",
          trigger: "answer4",
        },
        {
          value: 2,
          label: "How to change username?",
          trigger: "answer5",
        },
        {
          value: 3,
          label: "How do I change my biography?",
          trigger: "answer6",
        },
        {
          value: 4,
          label: "Previous",
          trigger: "Account",
        },
        {
          value: 5,
          label: "Main Menu",
          trigger: "Questions",
        },
      ],
    },

    {
      id: "Payments",
      options: [
        {
          value: 1,
          label: "How can I make a payment?",
          trigger: "answer7",
        },
        {
          value: 2,
          label: "How can I view a history of my payments?",
          trigger: "answer8",
        },
        {
          value: 4,
          label: "Main Menu",
          trigger: "Questions",
        },
      ],
    },

    {
      id: "Reviews",
      options: [
        {
          value: 1,
          label: "What is a review and what is it for?",
          trigger: "answer9",
        },
        {
          value: 2,
          label: "Who can write reviews on Simple services?",
          trigger: "answer10",
        },
        {
          value: 4,
          label: "Main Menu",
          trigger: "Questions",
        },
      ],
    },

    {
      id: "Refunds",
      options: [
        {
          value: 1,
          label: "How do refunds work in simpleservice?",
          trigger: "answer11",
        },
        {
          value: 2,
          label: "How long does the refund take?",
          trigger: "answer12",
        },
        {
          value: 4,
          label: "Main Menu",
          trigger: "Questions",
        },
      ],
    },

    {
      id: "Services",
      options: [
        {
          value: 1,
          label: "How can I search for services in the app?",
          trigger: "answer13",
        },
        {
          value: 2,
          label: "How can I hire someone for a service?",
          trigger: "answer14",
        },
        {
          value: 4,
          label: "Main Menu",
          trigger: "Questions",
        },
      ],
    },

    {
      id: "Questions10",
      options: [
        {
          value: 1,
          label: "Yes",
          trigger: "Questions",
        },
        {
          value: 2,
          label: "No",
          trigger: "end",
        },
      ],
    },

    {
      id: "answer1",
      message: `As long as you log in to SimpleService, you can access your account by clicking "Login". Enter your email and password or, if you prefer, connect with us through Google+.`,
      end: false,
      trigger: "Volver a preguntar",
    },
    {
      id: "answer2",
      message:
        "If you wish to delete your account, please contact us at contacto@simpleservice.com. We'll help you delete it.Do not forget that once we delete your account, you will not be able to recover your information again, as everything will be removed from our system.",
      end: false,
      trigger: "Volver a preguntar",
    },
    {
      id: "answer3",
      component: (
        <div>
          <p>
            If you forgot your password, you can reset it by following these
            steps:
          </p>
          <ul>
            <li>
              Go to the login page and click on the "Forgot your password?"
              link.
            </li>
            <li>
              Enter the email address associated with your account and click
              "Submit".
            </li>
            <li>
              Check your email to find a message from us with a link to reset
              your password.
            </li>
            <li>
              Click on the link and follow the instructions to create a new
              strong password.
            </li>
          </ul>
        </div>
      ),
      end: false,
      trigger: "Volver a preguntar",
    },
    {
      id: "answer4",
      component: (
        <div>
          <p>
            If you want to change your profile picture, you can do so by
            following these steps:
          </p>
          <ul>
            <li>Go to My Profile.</li>
            <li>Enter to update my info</li>
            <li>Upload a new image</li>
            <li>Click the submit button</li>
          </ul>
        </div>
      ),
      end: false,
      trigger: "Volver a preguntar",
    },
    {
      id: "answer5",
      component: (
        <div>
          <p>
            If you want to change your username, you can do so by following
            these steps:
          </p>
          <ul>
            <li>Go to My Profile.</li>
            <li>Enter to update my info</li>
            <li>Enter a new username</li>
            <li>Click the submit button</li>
          </ul>
        </div>
      ),
      end: false,
      trigger: "Volver a preguntar",
    },
    {
      id: "answer6",
      component: (
        <div>
          <p>
            If you want to change your bio, you can do so by following these
            steps:
          </p>
          <ul>
            <li>Go to My Profile.</li>
            <li>Enter to update my info</li>
            <li>Enter a new Bio</li>
            <li>Click the submit button</li>
          </ul>
        </div>
      ),
      end: false,
      trigger: "Volver a preguntar",
    },
    {
      id: "answer7",
      component: (
        <div>
          <p>To make a payment in our app, follow these steps:</p>
          <ul>
            <li>Sign in to your account.</li>
            <li>Click on the service you want to buy.</li>
            <li>Click add to cart</li>
            <li>Verify your purchase and click on checkout</li>
          </ul>
        </div>
      ),
      end: false,
      trigger: "Volver a preguntar",
    },
    {
      id: "answer8",
      component: (
        <div>
          <p>To view payment history in our app, follow these steps:</p>
          <ul>
            <li>Sign in to your account.</li>
            <li>Click on my profile.</li>
            <li>Click on my orders</li>
            <li>Check purchase history</li>
          </ul>
        </div>
      ),
      end: false,
      trigger: "Volver a preguntar",
    },
    {
      id: "answer9",
      message: `They are comments that our users have made about the products they have bought and the sellers of them. They are totally reliable, since each user freely expresses their shopping experience on SimpleService. Rating the service of our sellers and the quality of the products allows us to have an effective feedback. At SimpleService we invite you to read the comments that other users have written before making a purchase and, when you are the one who buys a product, help us in the same way: by writing your own review.`,
      end: false,
      trigger: "Volver a preguntar",
    },
    {
      id: "answer10",
      message: `You can write your own reviews if you are already registered with SimpleService and have made at least one purchase with us. Please remember that you can only post one review per product and seller.`,
      end: false,
      trigger: "Volver a preguntar",
    },
    {
      id: "answer11",
      message: `Once your order is cancelled, either by your own will or canceled by the provider or SimpleService due to an error in the order; A Coupon will be generated immediately, which will be sent to you via email.`,
      end: false,
      trigger: "Volver a preguntar",
    },
    {
      id: "answer12",
      message: `In any payment method, your refund request will be dealt with within 48 business hours.`,
      end: false,
      trigger: "Volver a preguntar",
    },
    {
      id: "answer13",
      message: `You can search for services in the app using the search bar on the main screen. You can also filter the results by category and other criteria.`,
      end: false,
      trigger: "Volver a preguntar",
    },
    {
      id: "answer14",
      message: `To hire someone for a service, select the profile of the service provider you wish to hire and follow the instructions to make a service request.`,
      end: false,
      trigger: "Volver a preguntar",
    },
    {
      id: "end",
      message: "It was a pleasure to help you",
      end: true,
    },
  ];

  return (
    <>
      <div>
        <Segment>
          <ChatBot
            steps={steps}
            floating={true}
            opened={opened}
            toggleFloating={toggleFloating}
          />
        </Segment>
      </div>
    </>
  );
}
