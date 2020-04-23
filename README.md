# FA21

list request

```json
[
  '{{repeat(5)}}',
  {
    id: '{{integer()}}',
    name: '{{firstName()}} {{surname()}}',
    department: '{{random("IT Department", "HR Department", "Marketing Department", "OP Department")}}',
	position: '{{random("employee", "boss")}}',
    createdAt: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    requestAt: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    acceptAt: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    isAccept: '{{bool()}}',
    total: '{{integer(1,15)}}',
    done: '{{integer(1, this.total)}}'
  }
]
```

list working today

```json
[
  '{{repeat(5)}}',
  {
    id: '{{integer()}}',
    name: '{{firstName()}} {{surname()}}',
    department: '{{random("IT Department", "HR Department", "Marketing Department", "OP Department")}}',
	position: '{{random("working", "not working")}}',
    updateAt: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}'
  }
]
```

get request by id

```json
  {
    id: '{{integer()}}',
    name: '{{firstName()}} {{surname()}}',
    department: 'IT Department',
	position: '{{random("employee")}}',
    reason: '{{lorem(1, "paragraphs")}}',
    createdAt: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    requestAt: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    acceptAt: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    isAccept: '{{bool()}}',
    total: '{{integer(1,15)}}',
    done: '{{integer(1, this.total)}}',
    timeRemind: 2,
    tasks: [
      '{{repeat(3)}}',
      {
        id: '{{index()}}',
        title: '{{firstName()}}',
        description: '{{lorem(1, "paragraphs")}}',
        status:'{{random("todo", "working", "done")}}'
      }
    ],
    comments: [
     '{{repeat(2)}}',
      {
        id: '{{index()}}',
        idUser: '{{integer(1,100)}}',
        content: '{{lorem(1, "paragraphs")}}'
      }
      ]
  }

```

get list working today by id

```json
  {
    id: '{{integer()}}',
    name: '{{firstName()}} {{surname()}}',
    department: 'IT Department',
	position: '{{random("employee")}}',
    reason: '{{lorem(1, "paragraphs")}}',
    createdAt: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    requestAt: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    acceptAt: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    isAccept: '{{bool()}}',
    total: '{{integer(1,15)}}',
    done: '{{integer(1, this.total)}}',
    timeRemind: 2,
    tasks: [
      '{{repeat(3)}}',
      {
        id: '{{index()}}',
        title: '{{firstName()}}',
        description: '{{lorem(1, "paragraphs")}}',
        status:'{{random("todo", "working", "done")}}'
      }
    ],
    comments: [
     '{{repeat(2)}}',
      {
        id: '{{index()}}',
        idUser: '{{integer(1,100)}}',
        content: '{{lorem(1, "paragraphs")}}'
      }
    ],
      logs: [
        '{{repeat(4)}}',
      {
        id: '{{index()}}',
        timeNeedCheck: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
        timeChecked: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
        image: 'http://placehold.it/32x32'
      }
      ]
  }

```