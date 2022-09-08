export const formData = [
    {
      id: "fname",
      label: "First name",
      placeholder: "Enter first name",
      type: "text",
      validationType: "string",
      value: "Rajesh",
      validations: [
        {
          type: "required",
          params: ["this field is required"]
        },
        {
          type: "min",
          params: [5, "name cannot be less than 5 characters"]
        },
        {
          type: "max",
          params: [10, "name cannot be more than 10 characters"]
        }
      ]
    },
    {
        id: "lname",
        label: "Last name",
        placeholder: "Enter last name",
        type: "text",
        validationType: "string",
        value: "Gole",
        validations: [
          {
            type: "notRequired",
            params: ["this field is not required"]
          },
          {
            type: "min",
            params: [3, "name cannot be less than 3 characters"]
          },
          {
            type: "max",
            params: [10, "name cannot be more than 10 characters"]
          }
        ]
      },
    {
      id: "phoneNumber",
      label: "phone number",
      type: "text",
      validationType: "number",
      value: "9898989898",
      validations: [
        {
          type: "min",
          params: [6000000000, "phone number cannot be less than 10 characters"]
        },
        {
            type: "max",
            params: [9999999999, "phone number cannot be more than 10 characters"]
          },
        {
          type: "required",
          params: ["phone number is required"]
        }
      ]
    },
  ];
  