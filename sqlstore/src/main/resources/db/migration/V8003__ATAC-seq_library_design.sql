INSERT INTO LibraryDesign (name, sampleClassId, librarySelectionType, libraryStrategyType, suffix, libraryType) VALUES ('AS', (SELECT sampleClassId FROM SampleClass WHERE alias = 'gDNA (aliquot)'), (SELECT librarySelectionTypeId FROM LibrarySelectionType WHERE name = 'Hybrid Selection'), (SELECT libraryStrategyTypeId FROM LibraryStrategyType WHERE name = 'OTHER'), '_AS', (SELECT libraryTypeId FROM LibraryType WHERE description = 'Paired End' AND platformType = 'Illumina'));
