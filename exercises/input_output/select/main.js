var meds;
var messages = [
  "Adderall is used to treat attention deficit hyperactivity disorder (ADHD) and narcolepsy (a sleep disorder).",
  "Topical cocaine can be used as a local numbing agent to help with painful procedures in the mouth or nose.",
  "3,4-Methyl enedioxy methamphetamine (MDMA), commonly known as ecstasy (℮) or molly, is a psychoactive drug primarily used for recreational purposes. The desired effects include altered sensations, increased energy, empathy, as well as pleasure. When taken by mouth, effects begin in 30 to 45 minutes and last 3 to 6 hours.",
  "Ketamine is a medication primarily used for induction and maintenance of anesthesia.",
  "Fluoxetine, sold under the brand names Prozac and Sarafem among others, is an antidepressant of the selective serotonin reuptake inhibitor (SSRI) class. It is used for the treatment of major depressive disorder, obsessive–compulsive disorder (OCD), bulimia nervosa, panic disorder, and premenstrual dysphoric disorder. It is also approved for treatment of major depressive disorder in adolescents and children 8 years of age and over. It has also been used to treat premature ejaculation. Fluoxetine is taken by mouth.",
  "Methylphenidate, sold under the brand name Ritalin and Concerta among others, is a stimulant drug used to treat attention deficit-hyperactivity disorder (ADHD) and narcolepsy.",
  "Diazepam is mainly used to treat anxiety, insomnia, panic attacks and symptoms of acute alcohol withdrawal."
];

$("#meds").change(function() {
  day = $("#meds").val();
  console.log(day);
  $(".message").html(messages[day]);
})

$("#size").change(function() {

  var size = $(this).val();
  var size_value = size + "px";

  $(".circle").css("height", size_value);
  $(".circle").css("width", size_value);

});
