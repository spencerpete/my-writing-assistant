# Project Overview

## Project Name

My Writing Assistant

## Project Description

My writing assistant is an orginizational tool for writers, within the site they can create a list of characters, A brief summary, and breakdown of scenes.

## Wireframes

![Wireframe](https://user-images.githubusercontent.com/69879139/121009948-c291f580-c762-11eb-8da5-bf23d15313ab.png)

## Component Hierarchy

![Component Hierarchy](https://user-images.githubusercontent.com/69879139/121025918-a9de0b80-c773-11eb-8071-41867b365a3f.png)

## API and Data Sample

### Writing Table

```json
{
  "records": [
    {
      "id": "recymbmXBeIEfynJB",
      "fields": {
        "location": "INT. James' bedroom",
        "name": "Scene 1",
        "description": "James wakes up to the sound of the garbage truck, realizes he is late and busts out of the room",
        "characters": "James",
        "act": "act one",
        "formating": "screenplay"
      },
      "createdTime": "2021-06-04T14:12:25.000Z"
    }
  ],
  "offset": "recymbmXBeIEfynJB"
}
```

### Character Table

```json
{
  "records": [
    {
      "id": "recsbDYwZTagC3bWn",
      "fields": {
        "name": "James",
        "age": "17",
        "backstory": "Just a kid being a kid"
      },
      "createdTime": "2021-06-04T14:12:55.000Z"
    }
  ],
  "offset": "recsbDYwZTagC3bWn"
}
```

### MVP/PostMVP

#### MVP

- Allow User to choose between Screenplay, Stageplay, and Teleplay with apropriate act breakdowns for each.
- Allow user to create scenes for specific acts and formats
- Render Scenes on Scene Board
- Create and render Character List
- Use Tailwind css for site design

#### PostMVP

- Add Edit form for Characters
- Add Dragable Scene compnets to SceneBoard
- Link characters to scenes they are in.
- Add Features that help guide the users act structure.

## Project Schedule

| Day        | Deliverable                                        | Status     |
| ---------- | -------------------------------------------------- | ---------- |
| June 4-6   | Prompt / Wireframes / Priority Matrix / Timeframes | Complete   |
| June 7     | Project Approval                                   | Complete   |
| June 8     | Core Application Structure (HTML, CSS, etc.)       | Complete   |
| June 9     | Pseudocode / actual code                           | Complete   |
| June 10    | MVP                                                | Complete   |
| June 11    | Daggable Components                                | Complete   |
| June 12-13 | Finishing Touches                                  | Complete   |
| June 14    | Presentations                                      | Incomplete |

## Timeframes

| Component                       | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Proposal                        |    H     |      2hrs      |      2hr      |     2hr     |
| Airtable setup                  |    H     |     .5hrs      |      1hr      |     1hr     |
| Site Basic HTML                 |    H     |      1hrs      |      1hr      |     1hr     |
| Screneplay data forms           |    H     |      3hrs      |      2hr      |     2hr     |
| Stage play data forms           |    H     |      3hrs      |      2hr      |     2hr     |
| Teleplay data forms             |    H     |      3hrs      |      4hr      |     4hr     |
| Character data forms            |    H     |      2hrs      |      1hr      |     1hr     |
| Character List population       |    H     |      2hrs      |      1hr      |     1hr     |
| Character Data Update/Deletion  |    H     |      2hrs      |      N/A      |     N/A     |
| Scene board Data(screenplay)    |    H     |      3hrs      |      2hr      |     2hr     |
| Scene board Data(stage play)    |    H     |      3hrs      |      1hr      |     1hr     |
| Scene board Data(teleplay)      |    H     |      3hrs      |      1hr      |     1hr     |
| Screneplay data update/deletion |    H     |      2hrs      |      3hr      |     N/A     |
| Stage play data update/deletion |    H     |      2hrs      |      N/A      |     N/A     |
| Teleplay data update/deletion   |    H     |      2hrs      |      N/A      |     N/A     |
| Tailwind CSS                    |    H     |      5hrs      |      6hr      |     6hr     |
| import Daggalbe w/ React        |    H     |      4hrs      |      5hr      |     N/A     |
| Component CSS                   |    H     |      3hrs      |      3hr      |     3hr     |
| Total                           |    H     |    45.5hrs     |     35hrs     |    35hrs    |

## SWOT Analysis

### Strengths:

I have a pretty strong understanding of React and implementing CRUD so the initial functionality will be easy.

### Weaknesses:

Im worried my site is too basic, I want to add more features to the site to make it more dynamic than a simple text input.

### Opportunities:

With the functionality of my site being easily completed in a day or two I will have more time to add the dynamic features and implement a component library

### Threats:

Using the draggable react libray may prove difficult and therefore leave out a feautre that I think will make my site stand out. My site lends it self more to desktop/ Ipad. While I will still make responsive mobile design, the site will be desktop focused.
