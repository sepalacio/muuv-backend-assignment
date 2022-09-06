### GET `/actorsWithMultipleCharacters`

> Get Actors who played more than one character in a single movie

#### Response

- Status 200:

```js
{
  "Chris Evans": [
    {
      movieName: "Fantastic Four (2005)",
      characterName: "Johnny Storm / Human Torch"
    },
    {
      movieName: "Captain America: The First Avenger",
      characterName: "Steve Rogers / Captain America"
    }
  ],
  "MichaelB. Jordan": [
    {
      movieName: "Fantastic Four (2015)",
      characterName: "Johnny Storm / The Human Torch"
    },
    {
      movieName: "Black Panther",
      characterName: "N'Jadaka / Erik 'Killmonger' Stevens"
    }
  ]
};
```

- Status 500:

```js
{
    message: 'Something went wrong while setting up request',
    status: 500,
}
```
