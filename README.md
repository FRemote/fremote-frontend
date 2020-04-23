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
    updateAt: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    acceptAt: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    isAccept: '{{bool()}}',
    process: '{{integer(1,100)}}'
  }
]
```