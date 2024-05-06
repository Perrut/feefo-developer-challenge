package br.com.perrut;

import java.util.List;
import java.util.Locale;
import java.util.Objects;
import org.apache.commons.text.similarity.LevenshteinDistance;

public class Normaliser {

  private final static LevenshteinDistance LEVENSHTEIN_DISTANCE = new LevenshteinDistance();

  private final List<String> JOB_TITLES = List.of(
      "Architect", "Software engineer", "Quantity surveyor", "Accountant"
  );

  public String normalise(final String toNormalise) {
    Objects.requireNonNull(toNormalise, "Text to normalize cannot be null.");
    return this.findNearMatch(toNormalise);
  }

  /**
   * Here we are using the
   * <a href="https://www.sciencedirect.com/topics/computer-science/levenshtein-distance">Levenshtein distance</a>,
   * that is a string metric for measuring the difference between two sequences defined as the
   * minimum number of edit operations, such as insertion, deletion, and substitution of a single
   * character, needed to transform one string into another.
   * So, the approach is to find the lower distance between the user input and the list of
   * pre-defined job titles.
   * @param text the text we are using to find the lower distance.
   * @return the job title with closer distance to the text provided.
   */
  private String findNearMatch(final String text) {
    int nearScore = Integer.MAX_VALUE;
    String nearMatch = "";
    for (final String jobTitle : JOB_TITLES) {
      final Integer distance = LEVENSHTEIN_DISTANCE.apply(
          text.toLowerCase(Locale.ROOT),
          jobTitle.toLowerCase(Locale.ROOT)
      );
      if (distance > -1 && distance < nearScore) {
        nearScore = distance;
        nearMatch = jobTitle;
      }
    }
    return nearMatch;
  }
}
