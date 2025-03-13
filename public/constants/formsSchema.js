import {
  emailValidation,
  formatValidation,
  nameValidation,
  passwordValidation,
  userNameValidation
} from "./validationRules"

export const formsSchema = {
    createUser: {
        id: "createUser",
        title: "auth.register",
        description: "createUser.description",
        inputFields: [
          { 
            inputId: 'inputText',           
            name: "username",
            label: "username",
            type: "text",
            placeholder: "auth.userName",
            autoComplete: "off",
            validationRules: userNameValidation
          },
          { 
            inputId: 'inputText',           
            name: "email",
            label: "Email",
            type: "email",
            placeholder: "auth.userEmail",
            autoComplete: "email",
            validationRules: emailValidation
          },
          {
            inputId: 'inputText',
            name: "password",
            label: "Password",
            type: "password",
            placeholder: "auth.userPass",
            autoComplete: "new-password",
            validationRules: passwordValidation
          },
          {
            inputId: 'inputText',
            name: "confirmPassword",
            label: "confirmPassword",
            type: "password",
            placeholder: "auth.userPass2",
            autoComplete: "off",
            validationRules: false
            // validationRules: password2Validation
          },
        ],
        submitText: "auth.register",
        urlSubmit: "/auth/create_user",
    },
    signIn: {
        id: "signIn",
        title: "auth.signIn",
        description: "signIn.description",
        inputFields: [
          { 
            inputId: 'inputText',           
            name: "email",
            label: "Email",
            type: "email",
            placeholder: "auth.userEmail",
            autoComplete: "email",
            validationRules: emailValidation
          },
          {
            inputId: 'inputText',
            name: "password",
            label: "Password",
            type: "password",
            placeholder: "auth.userPass",
            autoComplete: "new-password",
            validationRules: passwordValidation
          },
        ],
        submitText: "auth.signIn",
        urlSubmit: "/auth/signIn",
    },
    createDeck: {
      id: "createDeck",
      title: "createDeck.title",
      description: "Fill out the form below to create a new deck.",
      inputFields: [
          {   
            inputId: 'inputText',         
            name: "name",
            label: "Name",
            type: "text",
            placeholder: "Enter deck name",
            autoComplete: "off",
            validationRules: nameValidation
          },
          {  
            inputId: 'inputSelect',
            name: "format",
            label: "Format",
            type: "text",
            placeholder: "Enter deck format",
            autoComplete: "off",
            validationRules: formatValidation,
            options: [
              { value: "NONE", label: "None" },
              { value: "STANDARD", label: "Standard" },
              { value: "MODERN", label: "Modern" },
              { value: "PIONEER", label: "Pioneer" },
              { value: "LEGACY", label: "Legacy" },
              { value: "VINTAGE", label: "Vintage" },
              { value: "COMMANDER", label: "Commander" },
              { value: "CEDH", label: "cEDH" },
              { value: "BRAWL", label: "Brawl" },
              { value: "HISTORIC", label: "Historic" },
              { value: "PAUPER", label: "Pauper" },
              { value: "PEASANT", label: "Peasant" },
              { value: "CANADIAN_HIGHLANDER", label: "Canadian Highlander" },
              { value: "FRONTIER", label: "Frontier" },
              { value: "TINY_LEADERS", label: "Tiny Leaders" },
              { value: "DUEL_COMMANDER", label: "Duel Commander" },
              { value: "OLD_SCHOOL", label: "Old School" },
              { value: "PREMODERN", label: "Premodern" },
              { value: "BLOCK", label: "Block" },
              { value: "BOOSTER_DRAFT", label: "Booster Draft" },
              { value: "SEALED", label: "Sealed" },
              { value: "PLANECHASE", label: "Planechase" },
              { value: "ARCHENEMY", label: "Archenemy" },
              { value: "TWO_HEADED_GIANT", label: "Two-Headed Giant" },
              { value: "CONSPIRACY", label: "Conspiracy" },
              { value: "JUMPSTART", label: "Jumpstart" },
              { value: "COMMANDER_LEGENDS", label: "Commander Legends" },
              { value: "BATTLE_BOX", label: "Battle Box" }
            ],
          },
          {   
            inputId: 'inputTextSearch',         
            name: "commanderName",
            label: "commanderName",
            type: "text",
            placeholder: "createDeck.commanderName",
            autoComplete: "off",
            validationRules: nameValidation,
            conditional:{
              when: { 
                name: 'format', 
                value: ['COMMANDER', 'CEDH', 'BRAWL', 'CANADIAN_HIGHLANDER', 'TINY_LEADERS', 'DUEL_COMMANDER', 'COMMANDER_LEGENDS'] 
              }
            }
          },
          // {
          //   inputId: 'inputText',
          //   name: "description",
          //   label: "Description",
          //   type: "text",
          //   placeholder: "Enter deck description",
          //   autoComplete: "off",
          // },
          {
            inputId: 'inputRadio',
            name: "status",
            label: "Status",
            type: "select",
            placeholder: "Select deck status",
            autoComplete: "off",
            options: [
                { value: "PRIVATE", label: "Private" },
                { value: "PUBLIC", label: "Public" },
            ],
          }
      ],
      submitText: "Create Deck",
      urlSubmit: "/deck/create",
    },
    addCartToDeck: {
      id: "addCartToDeck",
      title: false,
      description: "",
      inputFields: [
          {   
            inputId: 'inputText',         
            name: "name",
            label: false,
            type: "text",
            placeholder: false,
            autoComplete: "off",
            validationRules: nameValidation
          },
      ],
      submitText: "deck.algo",
      urlSubmit: "/card/find_card_by_name",
    }
}
  
