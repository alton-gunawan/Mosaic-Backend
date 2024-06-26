export default function GenerateUpdateExpression(object) {
  let exp = {
    UpdateExpression: 'set',
    ExpressionAttributeNames: {},
    ExpressionAttributeValues: {},
  };
  for (const [key, value] of Object.entries(object)) {
    exp.UpdateExpression += ` #${key} = :${key},`;
    exp.ExpressionAttributeNames[`#${key}`] = key;
    exp.ExpressionAttributeValues[`:${key}`] = value;
  }
  // remove trailing comma
  exp.UpdateExpression = exp.UpdateExpression.slice(0, -1);
  return exp;
}
