package br.com.perrut;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;


class NormaliserTest {

    private final Normaliser normaliser = new Normaliser();

    @ParameterizedTest
    @CsvSource({
        "Software engineer,Java engineer",
        "Software engineer,C# engineer",
        "Accountant,Accountant",
        "Accountant,Chief accountant",
        "Quantity surveyor,Senior surveyor",
        "Architect,Solutions architect",
    })
    void normaliser__shouldNormaliseJobsCorrectly(
        final String expectedJob, final String providedJob
    ) {
        assertEquals(expectedJob,this.normaliser.normalise(providedJob));
    }

    @Test
    void normaliser__shouldNotAcceptNullAsStringToNormalise() {
        assertThrows(RuntimeException.class, () -> this.normaliser.normalise(null));
    }
}
