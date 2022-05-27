export async function Enable(ThisObject: any) {
  console.log(ThisObject);
  ThisObject.node.send({
    op: "filters",
    guildId: ThisObject.guild,
    lowPass: {
      smoothing: 18.0,
    },
  });
}
