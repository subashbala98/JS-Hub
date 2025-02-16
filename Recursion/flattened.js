// Flattened Structure - Input will be the nested object and the output will be keys represent path of each value;
// Deloitte Interview question.
const obj = {
  name: "Google",
  department: {
    name: "Cloud",
    branch: {
      name: "San Francisco",
      timeZone: "PST",
    },
  },
};

function flattenedObj(obj, parentKey = "", result = {}) {
  for (let key in obj) {
    let newKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      flattenedObj(obj[key], newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
}

/* Expected output
{
    name:'Google',
    'department.name':'Cloud',
    'department.branch.name':'San Francisco',
    'department.branch.timezone':'PST'
}
*/
