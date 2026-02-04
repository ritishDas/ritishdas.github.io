import { fetchElement, gardener, replaceElement, appendElement } from '/gardener.js'

export default function currentwork(name, time, description) {
  return (gardener(
    {
      "t": "div",
      "cn": [
        "bg-gray-700",
        "rounded-xl",
        "p-3"
      ],
      "attr": {
        "id": "currentwork"
      },
      "children": [
        {
          "t": "div",
          "cn": [
            "flex",
            "text-green-500",
            "gap-1",
            "items-center",
            "m-4",
            "blinking"
          ],
          "children": [
            {
              "t": "div",
              "cn": [
                "rounded-full",
                "bg-green-500",
                "w-3",
                "h-3"
              ],
              "txt": ""
            },
            {
              "t": "span",
              "txt": "In progress"
            }
          ]
        },
        {
          "t": "p",
          "cn": [
            "font-bold",
            "text-xl"
          ],
          "txt": name
        },
        {
          "t": "p",
          "cn": [
            "text-gray-300",
            "text-md"
          ],
          "txt": time
        },
        {
          "t": "p",
          "cn": [
            "text-gray-300",
            "text-sm",
            "my-2",
            "font-light"
          ],
          "txt": description
        }
      ]
    }
  ));
}
