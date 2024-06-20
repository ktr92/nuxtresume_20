exports.handler = async function(event, context) {
  //  Вместо этой строчки добавьте ваш реальный код
  //  для обработки запроса к API и получения данных
  const projects = [
    { title: "Project 1", description: "Описание проекта 1" },
    { title: "Project 2", description: "Описание проекта 2" },
  ];

  console.log(projects)

  return {
    statusCode: 200,
    body: JSON.stringify(projects),
  };
};